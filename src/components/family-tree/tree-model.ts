export type Person = {
  id: string;
  name: string;
  generation: number;
  parentIds: string[];
};

export const people: Person[] = [
  { id: 'ada', name: 'Ada Williams', generation: 0, parentIds: [] },
  { id: 'james', name: 'James Williams', generation: 0, parentIds: [] },
  { id: 'rose', name: 'Rose Williams', generation: 1, parentIds: ['ada', 'james'] },
  { id: 'elijah', name: 'Elijah Williams', generation: 1, parentIds: ['ada', 'james'] },
  { id: 'grace', name: 'Grace Williams', generation: 1, parentIds: ['ada', 'james'] },
  { id: 'oliver', name: 'Oliver Bennett', generation: 2, parentIds: ['rose'] },
  { id: 'clara', name: 'Clara Bennett', generation: 2, parentIds: ['rose'] },
  { id: 'noah', name: 'Noah Williams', generation: 2, parentIds: ['elijah'] },
  { id: 'ivy', name: 'Ivy Brooks', generation: 2, parentIds: ['grace'] },
  { id: 'leo', name: 'Leo Brooks', generation: 2, parentIds: ['grace'] },
  { id: 'maya', name: 'Maya Bennett', generation: 3, parentIds: ['oliver'] },
  { id: 'finn', name: 'Finn Bennett', generation: 3, parentIds: ['oliver'] },
  { id: 'ella', name: 'Ella Bennett', generation: 3, parentIds: ['clara'] },
  { id: 'lucas', name: 'Lucas Williams', generation: 3, parentIds: ['noah'] },
  { id: 'lily', name: 'Lily Williams', generation: 3, parentIds: ['noah'] },
  { id: 'theo', name: 'Theo Brooks', generation: 3, parentIds: ['ivy'] },
  { id: 'ruby', name: 'Ruby Brooks', generation: 3, parentIds: ['leo'] },
  { id: 'amelia', name: 'Amelia Bennett', generation: 4, parentIds: ['maya'] },
  { id: 'henry', name: 'Henry Bennett', generation: 4, parentIds: ['maya'] },
  { id: 'evie', name: 'Evie Williams', generation: 4, parentIds: ['lucas'] },
  { id: 'archie', name: 'Archie Brooks', generation: 4, parentIds: ['ruby'] },
];

export function childrenOf(id: string, data = people) {
  return data.filter((person) => person.parentIds.includes(id));
}

export function descendantIds(id: string, data = people): Set<string> {
  const found = new Set<string>();
  const visit = (parent: string) => {
    for (const child of childrenOf(parent, data)) {
      if (found.has(child.id) || child.id === id) continue;
      found.add(child.id);
      visit(child.id);
    }
  };
  visit(id);
  return found;
}

export function visiblePeople(expanded: Set<string>, data = people) {
  const visible = new Set(data.filter((p) => !p.parentIds.length).map((p) => p.id));
  for (const person of [...data].sort((a, b) => a.generation - b.generation)) {
    if (person.parentIds.some((id) => visible.has(id) && expanded.has(id))) visible.add(person.id);
  }
  return data.filter((p) => visible.has(p.id));
}

export function toggleBranch(expanded: Set<string>, id: string, data = people) {
  const next = new Set(expanded);
  if (next.has(id)) {
    next.delete(id);
    for (const child of descendantIds(id, data)) next.delete(child);
  } else if (childrenOf(id, data).length) {
    next.add(id);
  }
  return next;
}

export type TreePosition = { x: number; y: number; delay: number };

export function layoutTree(visible: Person[], expanded: Set<string>) {
  const positions = new Map<string, TreePosition>();
  const later = visible.filter((p) => p.generation > 0);
  // A shared child is placed once, even when both parents are open.
  const owner = (p: Person) => p.parentIds.find((id) => expanded.has(id));
  const children = (id: string) => later.filter((p) => owner(p) === id);
  const top = later.filter((p) => p.generation === 1);
  const weight = (p: Person): number => Math.max(1, children(p.id).reduce((sum, c) => sum + weight(c), 0));
  const total = top.reduce((sum, p) => sum + weight(p), 0);
  const width = Math.max(960, total * 190 + 320);
  const usable = Math.min(width - 320, Math.max(420, total * 190));
  const place = (p: Person, left: number, span: number, delay: number) => {
    positions.set(p.id, { x: left + span / 2, y: 440 + (p.generation - 1) * 185, delay });
    const kids = children(p.id);
    const sum = kids.reduce((s, c) => s + weight(c), 0);
    let cursor = left;
    kids.forEach((child, index) => {
      const childSpan = span * weight(child) / sum;
      place(child, cursor, childSpan, index * 0.11);
      cursor += childSpan;
    });
  };
  let cursor = (width - usable) / 2;
  top.forEach((p, index) => {
    const span = usable * weight(p) / total;
    place(p, cursor, span, index * 0.11);
    cursor += span;
  });
  const founders = visible.filter((p) => p.generation === 0);
  founders.forEach((p, index) => positions.set(p.id, {
    x: width / 2 + (index - (founders.length - 1) / 2) * 194,
    y: 105,
    delay: index * 0.11,
  }));
  return { positions, width, height: Math.max(610, ...visible.map((p) => 570 + (p.generation - 1) * 185)) };
}