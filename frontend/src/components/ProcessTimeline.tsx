import AnimateOnScroll from './AnimateOnScroll';

export interface ProcessStep {
  title: string;
  body: string;
}

/** The one step-by-step layout, used for the buying, selling, and landlord processes. */
export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="max-w-2xl mx-auto">
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={step.title} className={`relative grid grid-cols-[3rem_1fr] gap-5 ${last ? '' : 'pb-9'}`}>
            {!last && <span className="absolute left-6 top-12 bottom-0 w-0.5 -translate-x-1/2 bg-gold/30" aria-hidden="true" />}
            <span className="relative w-12 h-12 rounded-full border-2 border-gold bg-white flex items-center justify-center font-serif text-lg font-bold text-navy">
              {i + 1}
            </span>
            <AnimateOnScroll delay={i * 0.06}>
              <h3 className="mt-2 font-serif text-xl font-bold text-navy">{step.title}</h3>
              <p className="mt-2 font-sans text-sm md:text-base text-gray-600 leading-relaxed">{step.body}</p>
            </AnimateOnScroll>
          </li>
        );
      })}
    </ol>
  );
}
