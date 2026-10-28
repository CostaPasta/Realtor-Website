'use client';

import { MotionConfig } from 'framer-motion';

// Visitors whose phone or computer is set to reduce motion get no sliding or moving
// animations; sections still fade in.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
