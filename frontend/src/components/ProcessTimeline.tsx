import AnimateOnScroll from './AnimateOnScroll';

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

interface Props {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: Props) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div
        className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold to-gold/10"
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <AnimateOnScroll key={step.number} delay={i * 0.1}>
          <div className={`relative flex gap-6 ${i < steps.length - 1 ? 'pb-10' : ''}`}>
            <div className="relative z-10 w-10 h-10 rounded-full bg-gold text-navy font-semibold text-sm flex items-center justify-center shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="font-sans font-semibold text-base text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.body}</p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
