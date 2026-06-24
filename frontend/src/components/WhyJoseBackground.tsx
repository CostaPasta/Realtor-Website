'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function PalmFrond({
  fill,
  fillOpacity,
  blades = 9,
  spread = 150,
  length = 240,
}: {
  fill: string;
  fillOpacity: number;
  blades?: number;
  spread?: number;
  length?: number;
}) {
  const startAngle = -spread / 2;
  const step = spread / (blades - 1);

  return (
    <g>
      <line x1={0} y1={0} x2={0} y2={38} stroke={fill} strokeOpacity={fillOpacity} strokeWidth={5} />
      {Array.from({ length: blades }, (_, i) => {
        const angle = startAngle + i * step;
        const t = Math.abs(i - (blades - 1) / 2) / ((blades - 1) / 2);
        const len = length * (1 - t * 0.22);
        const width = 15 * (1 - t * 0.3);
        const cx = len * 0.55;
        return (
          <path
            key={i}
            d={`M0,0 Q${cx},${-width} ${len},0 Q${cx},${width} 0,0 Z`}
            transform={`rotate(${angle})`}
            fill={fill}
            fillOpacity={fillOpacity}
          />
        );
      })}
    </g>
  );
}

export default function WhyJoseBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBack = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yAccent = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div style={{ y: yBack }} className="absolute -bottom-24 -left-20">
        <svg width={360} height={360} viewBox="-300 -300 600 600">
          <g transform="rotate(225)">
            <PalmFrond fill="#0D2442" fillOpacity={0.16} />
          </g>
        </svg>
      </motion.div>
      <motion.div style={{ y: yAccent }} className="absolute -top-16 -right-12">
        <svg width={260} height={260} viewBox="-300 -300 600 600">
          <g transform="rotate(45)">
            <PalmFrond fill="#C4A35A" fillOpacity={0.18} blades={7} length={190} />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
