import { createFileRoute } from '@tanstack/react-router';
import { FamilyTree } from '@/components/family-tree/family-tree';
import { pageMeta } from '@/components/site/brand';

export const Route = createFileRoute('/family-tree')({
  head: () => pageMeta('Family Tree Demo | Solomon Joy Abosede', 'Explore five generations of the sample Williams family through an animated, collapsible tree with founding ancestors above and branching roots below.'),
  component: FamilyTree,
});