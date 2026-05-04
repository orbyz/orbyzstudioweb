export function CTAActions() {
  return (
    <div className="flex flex-col items-start gap-4 mt-8">
      {/* PRIMARY CTA */}
      <a href="/contact" className="btn btn-primary">
        Solicitar propuesta
      </a>

      {/* MICRO TRUST */}
      <p className="text-sm text-muted">
        Respuesta en menos de 24h · Sin compromiso
      </p>
    </div>
  );
}
