type Props = {
  title?: string;
  children: React.ReactNode;
};

export function FooterColumn({ title, children }: Props) {
  return (
    <div>
      {title && (
        <h4 className="text-sm font-semibold text-text mb-4">{title}</h4>
      )}
      <div className="flex flex-col gap-2 text-sm text-muted">{children}</div>
    </div>
  );
}
