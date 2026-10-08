import { describe, expect, it } from 'vitest';
import { childrenOf, descendantIds, layoutTree, people, toggleBranch, visiblePeople } from '@/components/family-tree/tree-model';

describe('inverted family tree', () => {
  it('starts with all branches collapsed and only two founders visible', () => {
    expect(visiblePeople(new Set()).map((p) => p.id)).toEqual(['ada', 'james']);
  });
  it('expands only the immediate generation, without auto-expanding children', () => {
    const expanded = toggleBranch(new Set(), 'ada');
    expect(visiblePeople(expanded).map((p) => p.id)).toEqual(['ada', 'james', 'rose', 'elijah', 'grace']);
    expect(expanded.size).toBe(1);
  });
  it('counts all 19 unique descendants for each founder without counting shared children twice', () => {
    expect(descendantIds('ada').size).toBe(19);
    expect(descendantIds('james').size).toBe(19);
    expect(descendantIds('rose').size).toBe(7);
  });
  it('supports two parents while rendering their shared child once', () => {
    const expanded = new Set(['ada', 'james']);
    expect(people.find((p) => p.id === 'rose')?.parentIds).toEqual(['ada', 'james']);
    expect(visiblePeople(expanded).filter((p) => p.id === 'rose')).toHaveLength(1);
  });
  it('closing a branch hides descendants and resets their expanded state', () => {
    const expanded = toggleBranch(new Set(['ada', 'rose', 'oliver']), 'ada');
    expect(expanded.size).toBe(0);
    expect(visiblePeople(expanded)).toHaveLength(2);
  });
  it('keeps shared children visible through the other expanded parent', () => {
    expect(visiblePeople(toggleBranch(new Set(['ada', 'james']), 'ada'))).toHaveLength(5);
  });
  it('places deeper generations below their parents and increases canvas width', () => {
    const expanded = new Set(people.filter((p) => childrenOf(p.id).length).map((p) => p.id));
    const all = layoutTree(visiblePeople(expanded), expanded);
    expect(all.width).toBeGreaterThan(960);
    expect(all.positions.get('amelia')?.y).toBe(995);
    expect(all.positions.get('maya')?.y).toBe(810);
  });
});