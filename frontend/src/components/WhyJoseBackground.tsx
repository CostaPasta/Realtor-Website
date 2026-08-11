'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const FROND_ASPECT = 820 / 647;

type ParallaxTier = 'slow' | 'medium' | 'fast';

type FrondConfig = {
  className: string;
  widthClass: string;
  width: number;
  rotation: number;
  opacity: number;
  color: 'navy' | 'gold';
  flipX?: boolean;
  parallax: ParallaxTier;
};

// 4 base fronds — used on the home page (WhyJose section)
const FRONDS: FrondConfig[] = [
  {
    className: '-bottom-8 -left-4 md:-bottom-14 md:-left-4',
    widthClass: 'w-[200px] md:w-[560px]',
    width: 560,
    rotation: -22,
    opacity: 0.5,
    color: 'navy',
    parallax: 'slow',
  },
  {
    className: '-top-6 -right-4 md:-top-8 md:-right-4',
    widthClass: 'w-[170px] md:w-[460px]',
    width: 460,
    rotation: 160,
    opacity: 0.45,
    color: 'gold',
    flipX: true,
    parallax: 'medium',
  },
  {
    className: 'top-[8%] -left-3 md:top-[8%] md:-left-4',
    widthClass: 'w-[140px] md:w-[320px]',
    width: 320,
    rotation: -108,
    opacity: 0.4,
    color: 'gold',
    parallax: 'slow',
  },
  {
    className: '-bottom-6 right-[1%] md:-bottom-10 md:right-[1%]',
    widthClass: 'w-[150px] md:w-[360px]',
    width: 360,
    rotation: 48,
    opacity: 0.4,
    color: 'navy',
    parallax: 'medium',
  },
];

// 8 extra fronds — only added when extended={true} (buy page Process section).
// Arranged in clusters per corner so they read like real palm canopies.
const EXTRA_FRONDS: FrondConfig[] = [
  // Bottom-left cluster: two companions to the main navy frond
  {
    className: 'bottom-[6%] -left-3 md:bottom-[6%] md:-left-4',
    widthClass: 'w-[110px] md:w-[280px]',
    width: 280,
    rotation: -42,
    opacity: 0.38,
    color: 'gold',
    parallax: 'medium',
  },
  {
    className: '-bottom-4 -left-2 md:-bottom-5 md:-left-3',
    widthClass: 'w-[85px] md:w-[210px]',
    width: 210,
    rotation: -10,
    opacity: 0.28,
    color: 'navy',
    parallax: 'fast',
  },
  // Top-left cluster: companion to the gold frond
  {
    className: 'top-[16%] -left-2 md:top-[16%] md:-left-3',
    widthClass: 'w-[80px] md:w-[195px]',
    width: 195,
    rotation: -130,
    opacity: 0.26,
    color: 'navy',
    parallax: 'fast',
  },
  // Left side mid: a lone frond peeking from a different height
  {
    className: 'top-[52%] -left-3 md:top-[52%] md:-left-4',
    widthClass: 'w-[100px] md:w-[245px]',
    width: 245,
    rotation: -70,
    opacity: 0.32,
    color: 'gold',
    parallax: 'slow',
  },
  // Top-right cluster: companion to the main gold frond
  {
    className: 'top-[3%] -right-2 md:top-[3%] md:-right-3',
    widthClass: 'w-[85px] md:w-[210px]',
    width: 210,
    rotation: 142,
    opacity: 0.28,
    color: 'navy',
    flipX: true,
    parallax: 'fast',
  },
  // Right side mid-high: different height and angle from the top cluster
  {
    className: 'top-[30%] -right-3 md:top-[30%] md:-right-4',
    widthClass: 'w-[105px] md:w-[250px]',
    width: 250,
    rotation: 88,
    opacity: 0.34,
    color: 'gold',
    parallax: 'medium',
  },
  // Right side mid-low
  {
    className: 'top-[60%] -right-3 md:top-[60%] md:-right-4',
    widthClass: 'w-[95px] md:w-[230px]',
    width: 230,
    rotation: 58,
    opacity: 0.30,
    color: 'navy',
    parallax: 'slow',
  },
  // Bottom-right companion: tighter angle than the main frond
  {
    className: 'bottom-[8%] -right-2 md:bottom-[8%] md:-right-3',
    widthClass: 'w-[80px] md:w-[195px]',
    width: 195,
    rotation: 28,
    opacity: 0.26,
    color: 'gold',
    parallax: 'fast',
  },
];

function ParallaxFrond({
  frond,
  y,
  rotate,
}: {
  frond: FrondConfig;
  y: MotionValue<number>;
  rotate: MotionValue<number>;
}) {
  const height = Math.round(frond.width / FROND_ASPECT);

  return (
    <motion.div style={{ y, rotate }} className={`absolute pointer-events-none ${frond.className}`}>
      <div
        className={frond.widthClass}
        style={{
          transform: `rotate(${frond.rotation}deg) scaleX(${frond.flipX ? -1 : 1})`,
          opacity: frond.opacity,
        }}
      >
        <Image
          src={`/images/palm-frond-${frond.color}.png`}
          alt=""
          aria-hidden
          width={frond.width}
          height={height}
          className="h-auto w-full select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

export default function WhyJoseBackground({ extended = false }: { extended?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const ySlow     = useTransform(scrollYProgress, [0, 1], [-80,  80]);
  const yMedium   = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const yFast     = useTransform(scrollYProgress, [0, 1], [-220, 220]);
  const rotateSlow   = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const rotateMedium = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rotateFast   = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const parallaxY: Record<ParallaxTier, MotionValue<number>> = {
    slow: ySlow, medium: yMedium, fast: yFast,
  };
  const parallaxRotate: Record<ParallaxTier, MotionValue<number>> = {
    slow: rotateSlow, medium: rotateMedium, fast: rotateFast,
  };

  const fronds = extended ? [...FRONDS, ...EXTRA_FRONDS] : FRONDS;

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {fronds.map((frond, i) => (
        <ParallaxFrond
          key={i}
          frond={frond}
          y={parallaxY[frond.parallax]}
          rotate={parallaxRotate[frond.parallax]}
        />
      ))}
    </div>
  );
}
