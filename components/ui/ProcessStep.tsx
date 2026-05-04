type Props = {
  step: string;
  title: string;
  description: string;
};

export function ProcessStep({ step, title, description }: Props) {
  return (
    <div className="group relative">
      {/* NUMBER */}
      <div className="mb-4 text-2xl font-semibold text-primary opacity-80">
        {step}
      </div>

      {/* CARD */}
      <div className="rounded-xl border border-default p-5 transition-all duration-300 hover:-translate-y-0.5">
        <h4 className="text-base font-semibold text-text mb-2">{title}</h4>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
