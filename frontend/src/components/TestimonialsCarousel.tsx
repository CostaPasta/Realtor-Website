'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from '@/data/testimonials';

interface Props {
  testimonials: Testimonial[];
}

const AUTO_ADVANCE_MS = 5000;
const SWIPE_THRESHOLD = 50;

export default function TestimonialsCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, next, testimonials.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  };

  const current = testimonials[index];

  return (
    <div
      className="relative max-w-2xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-navy hover:border-gold hover:text-gold transition-colors shrink-0"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <TestimonialCard
                quote={current.quote}
                name={current.name}
                location={current.location}
                transactionType={current.transactionType}
                language={current.language}
                year={current.year}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-navy hover:border-gold hover:text-gold transition-colors shrink-0"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-gold' : 'w-2 bg-gray-200 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
