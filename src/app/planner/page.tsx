import { Metadata } from 'next';
import PlannerClient from './PlannerClient';

export const metadata: Metadata = {
  title: 'Feature Planner',
  description: 'Design your project blueprint and get an instant scale estimate with the LAYER 0 Feature Planner.',
};

export default function PlannerPage() {
  return <PlannerClient />;
}
