'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const FROND_ASPECT = 820 / 647;

type ParallaxTier = 'slow' | 'medium';

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

const FRONDS: FrondConfig[] = [
  {
    className: '-bottom-16 -left-12',
    widthClass: 'w-[170px] md:w-[440px]',
    width: 440,
    rotation: -22,
    opacity: 0.5,
    color: 'navy',
    parallax: 'slow',
  },
  {
    className: '-top-10 -right-10',
    widthClass: 'w-[140px] md:w-[360px]',
    width: 360,
    rotation: 160,
    opacity: 0.45,
    color: 'gold',
    flipX: true,
    parallax: 'medium',
  },
  {
    className: 'top-[8%] -left-14',
    widthClass: 'w-[100px] md:w-[270px]',
    width: 270,
    rotation: -108,
    opacity: 0.4,
    color: 'gold',
    parallax: 'slow',
  },
  {
    className: '-bottom-12 right-[2%]',
    widthClass: 'w-[110px] md:w-[290px]',
    width: 290,
    rotation: 48,
    opacity: 0.4,
    color: 'navy',
    parallax: 'medium',
  },
];

function ParallaxFrond({ frond, y }: { frond: FrondConfig; y: MotionValue<number> }) {
  const height = Math.round(frond.width / FROND_ASPECT);

  return (
    <motion.div style={{ y }} className={`absolute pointer-events-none ${frond.className}`}>
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

export default function WhyJoseBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [-110, 110]);

  const parallaxY: Record<ParallaxTier, MotionValue<number>> = {
    slow: ySlow,
    medium: yMedium,
  };

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {FRONDS.map((frond, i) => (
        <ParallaxFrond key={i} frond={frond} y={parallaxY[frond.parallax]} />
      ))}
    </div>
  );
}
