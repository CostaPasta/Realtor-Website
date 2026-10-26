import { notFound } from 'next/navigation';
import { testimonials } from '@/data/testimonials';
import TestimonialsView from './TestimonialsView';

// The page only exists once there are real client reviews to show.
export default function TestimonialsPage() {
  if (testimonials.length === 0) notFound();
  return <TestimonialsView />;
}
