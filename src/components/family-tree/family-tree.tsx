import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronUp, RotateCcw, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { childrenOf, descendantIds, layoutTree, people, toggleBranch, visiblePeople } from './tree-model';

function GrowingPath({ d, thickness, delay, reduced, className = '' }: {
  d: string; thickness: number; delay: number; reduced: boolean; className?: string;
}) {
  return (
    <motion.path
      className={`tree-root-path ${className}`}
      d={d}
      pathLength={1}
      strokeWidth={thickness}
      strokeDasharray="1 1"
      initial={reduced ? false : { strokeDashoffset: 1, opacity: 0 }}
      animate={{ d, strokeDashoffset: 0, opacity: 1 }}
      exit={{ strokeDashoffset: 1, opacity: 0, transition: { duration: reduced ? 0 : 0.35, delay: reduced ? 0 : 0.12 } }}
      transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: 'easeInOut', d: { duration: reduced ? 0 : 0.45, delay: 0 } }}
    />
  );
}

export function FamilyTree() {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const reduced = Boolean(useReducedMotion());
  const scroller = useRef<HTMLDivElement>(null);
  const visible = visiblePeople(expanded);
  const { positions, width, height } = layoutTree(visible, expanded);
  const visibleIds = new Set(visible.map((p) => p.id));
  const deepest = Math.max(...visible.map((p) => p.generation)) + 1;

  useEffect(() => {
    const element = scroller.current;
    if (!element) return;
    const center = () => { element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2; };
    center();
    const observer = new ResizeObserver(center);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="family-tree-page">
      <div className="site-container tree-heading">
        <div>
          <div className="eyebrow">THE WILLIAMS FAMILY</div>
          <h1>Family tree</h1>
        </div>
        <div className="tree-heading-detail"><Sprout aria-hidden="true" /><span>Five generations.<br />One shared beginning.</span></div>
      </div>

      <div className="site-container tree-toolbar">
        <div className="tree-stats" aria-live="polite"><strong>{visible.length}</strong> of {people.length} people <span className="tree-stat-divider" /><span>{deepest} {deepest === 1 ? 'generation' : 'generations'} visible</span></div>
        <div className="tree-toolbar-end"><span className="tree-sample-label">Sample family</span><Button variant="ghost" size="icon" title="Collapse all branches" aria-label="Collapse all branches" disabled={expanded.size === 0} onClick={() => setExpanded(new Set())}><RotateCcw /></Button></div>
      </div>

      <div className="tree-scroll" ref={scroller} tabIndex={0} role="region" aria-label="Williams family tree">
        <motion.div className="tree-canvas" style={{ width }} animate={{ height }} transition={{ duration: reduced ? 0 : 0.45 }}>
          <div className="tree-generation-label tree-founder-label">01 <span>FOUNDING GENERATION</span></div>
          <div className="tree-ground" />
          <span className="tree-ground-label">SHARED ROOTS</span>
          <svg className="tree-connectors" width={width} height={height} aria-hidden="true">
            <GrowingPath d={`M ${width / 2 - 97} 153 C ${width / 2 - 97} 210, ${width / 2 - 20} 204, ${width / 2} 245`} thickness={7} delay={0.35} reduced={reduced} />
            <GrowingPath d={`M ${width / 2 + 97} 153 C ${width / 2 + 97} 210, ${width / 2 + 20} 204, ${width / 2} 245`} thickness={7} delay={0.45} reduced={reduced} />
            <GrowingPath d={`M ${width / 2} 244 C ${width / 2 - 5} 278, ${width / 2 + 4} 304, ${width / 2} 346`} thickness={15} delay={0.85} reduced={reduced} className="tree-trunk" />
            <AnimatePresence>
              {visible.filter((p) => p.generation > 0).map((person) => {
                const position = positions.get(person.id);
                const parentId = person.parentIds.find((id) => expanded.has(id));
                const parent = parentId ? positions.get(parentId) : undefined;
                if (!position || !parent) return null;
                const fromX = person.generation === 1 ? width / 2 : parent.x;
                const fromY = person.generation === 1 ? 344 : parent.y + 38;
                const toY = position.y - 35;
                const middleY = fromY + (toY - fromY) * 0.5;
                return <GrowingPath key={person.id} d={`M ${fromX} ${fromY} C ${fromX} ${middleY}, ${position.x} ${middleY}, ${position.x} ${toY}`} thickness={Math.max(1.5, 8 / person.generation)} delay={position.delay} reduced={reduced} />;
              })}
            </AnimatePresence>
            <g className="tree-fine-roots">
              <path d={`M ${width / 2} 316 Q ${width / 2 - 25} 345 ${width / 2 - 48} 367 Q ${width / 2 - 82} 389 ${width / 2 - 94} 415`} />
              <path d={`M ${width / 2} 326 Q ${width / 2 + 24} 357 ${width / 2 + 58} 377 Q ${width / 2 + 82} 388 ${width / 2 + 90} 425`} />
            </g>
          </svg>

          {Array.from({ length: deepest - 1 }, (_, index) => <div className="tree-generation-label" style={{ top: 427 + index * 185 }} key={index}>0{index + 2}<span>{['CHILDREN', 'GRANDCHILDREN', 'GREAT-GRANDCHILDREN', 'NEWEST GENERATION'][index]}</span></div>)}

          <AnimatePresence>
            {visible.map((person) => {
              const position = positions.get(person.id);
              if (!position) return null;
              const hasChildren = childrenOf(person.id).length > 0;
              const open = expanded.has(person.id);
              const hidden = [...descendantIds(person.id)].filter((id) => !visibleIds.has(id)).length;
              const founder = person.generation === 0;
              const initials = person.name.split(' ').map((s) => s[0]).join('');
              return (
                <motion.div key={person.id} className={`tree-person ${founder ? 'tree-fruit' : 'tree-root-node'}`} style={{ left: position.x - 84, top: position.y - 38 }}
                  layout="position"
                  initial={reduced ? false : { opacity: 0, scale: 0.75, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -8, transition: { duration: reduced ? 0 : 0.2, delay: 0 } }}
                  transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : position.delay + (founder ? 0 : 0.48), layout: { duration: reduced ? 0 : 0.45, delay: 0 } }}
                >
                  {founder && <span className="tree-fruit-leaf" aria-hidden="true" />}
                  <Button variant="ghost" className="tree-person-button" aria-label={`${person.name}${hasChildren ? `, ${open ? 'collapse' : 'expand'} descendants` : ''}`} aria-expanded={hasChildren ? open : undefined} onClick={hasChildren ? () => setExpanded((current) => toggleBranch(current, person.id)) : undefined} aria-disabled={!hasChildren}>
                    <span className="tree-person-initials">{initials}</span>
                    <span className="tree-person-name">{person.name}<small>{founder ? 'Founding ancestor' : `Generation ${person.generation + 1}`}</small></span>
                    {hasChildren && (open ? <ChevronUp className="tree-toggle-icon" /> : <ChevronDown className="tree-toggle-icon" />)}
                  </Button>
                  {!open && hasChildren && hidden > 0 && <span className="tree-descendant-badge" aria-label={`${hidden} hidden descendants`}>+{hidden}</span>}
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div className="tree-canvas-signature"><Sprout aria-hidden="true" /><span>THE WILLIAMS FAMILY · EST. 1924</span></div>
        </motion.div>
      </div>
      <div className="site-container tree-bottomline"><span>Every generation, a new branch.</span><span>1924 — PRESENT</span></div>
    </section>
  );
}