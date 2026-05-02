type Props = {
  title: string;
  description: string;
};

export function WhyItem({ title, description }: Props) {
  return (
    <div className="group rounded-xl border border-default p-5 transition-all duration-300 hover:-translate-y-0.5">
      <h4 className="text-base font-semibold text-text mb-2">{title}</h4>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
