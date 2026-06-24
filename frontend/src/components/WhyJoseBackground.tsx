'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';

const FROND_ASPECT = 820 / 647;

type ParallaxTier = 'slow' | 'medium' | 'fast';

type FrondConfig = {
  className: string;
  width: number;
  rotation: number;
  scrollRotate: number;
  opacity: number;
  flipX?: boolean;
  parallax: ParallaxTier;
  drift?: boolean;
};

const FRONDS: FrondConfig[] = [
  {
    className: '-bottom-20 left-[1%]',
    width: 520,
    rotation: -28,
    scrollRotate: 24,
    opacity: 0.22,
    parallax: 'slow',
  },
  {
    className: 'top-[6%] right-[4%]',
    width: 400,
    rotation: 155,
    scrollRotate: 22,
    opacity: 0.2,
    flipX: true,
    parallax: 'fast',
    drift: true,
  },
  {
    className: 'bottom-[18%] -right-16',
    width: 360,
    rotation: 42,
    scrollRotate: 26,
    opacity: 0.18,
    parallax: 'medium',
    drift: true,
  },
  {
    className: 'top-[14%] left-[14%]',
    width: 300,
    rotation: -115,
    scrollRotate: 8,
    opacity: 0.16,
    parallax: 'medium',
  },
  {
    className: 'bottom-[6%] right-[22%]',
    width: 280,
    rotation: -72,
    scrollRotate: 7,
    opacity: 0.15,
    flipX: true,
    parallax: 'fast',
  },
  {
    className: 'top-[42%] -left-24',
    width: 340,
    rotation: 18,
    scrollRotate: 20,
    opacity: 0.14,
    parallax: 'slow',
    drift: true,
  },
  {
    className: 'top-[55%] right-[8%]',
    width: 260,
    rotation: -148,
    scrollRotate: 18,
    opacity: 0.13,
    parallax: 'medium',
  },
];

function ParallaxFrond({
  frond,
  y,
  x,
  scrollYProgress,
}: {
  frond: FrondConfig;
  y: MotionValue<number>;
  x?: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}) {
  const height = Math.round(frond.width / FROND_ASPECT);
  const half = frond.scrollRotate / 2;
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [frond.rotation - half, frond.rotation + half],
  );

  return (
    <motion.div
      style={x ? { y, x, rotate } : { y, rotate }}
      className={`absolute pointer-events-none ${frond.className}`}
    >
      <div
        style={{
          transform: `scaleX(${frond.flipX ? -1 : 1})`,
          opacity: frond.opacity,
        }}
      >
        <Image
          src="/images/palm-frond.png"
          alt=""
          aria-hidden
          width={frond.width}
          height={height}
          className="h-auto w-auto max-w-none select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

export default function WhyJoseBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [-210, 210]);
  const yFast = useTransform(scrollYProgress, [0, 1], [-340, 340]);
  const xMedium = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const xFast = useTransform(scrollYProgress, [0, 1], [-90, 90]);

  const parallaxY: Record<ParallaxTier, MotionValue<number>> = {
    slow: ySlow,
    medium: yMedium,
    fast: yFast,
  };

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {FRONDS.map((frond, i) => (
        <ParallaxFrond
          key={i}
          frond={frond}
          y={parallaxY[frond.parallax]}
          x={frond.drift ? (frond.parallax === 'fast' ? xFast : xMedium) : undefined}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}
