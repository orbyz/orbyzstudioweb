export default function Logo({
  size = 40,
  variant = "symbol",
}: {
  size?: number;
  variant?: "symbol" | "full";
}) {
  const color = "var(--color-primary)";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 160 120" fill="none">
        {/* O (forma sólida tipo C) */}
        <path
          d="
          M70 20
          A50 50 0 1 0 70 100
          L70 80
          A30 30 0 1 1 70 40
          Z
          "
          fill={color}
        />

        {/* Z (bloque geométrico real) */}
        <path
          d="
          M80 30
          H140
          L95 75
          H140
          V90
          H70
          L115 45
          H80
          Z
          "
          fill={color}
        />

        {/* Cuadrado (resultado) */}
        <rect x="125" y="5" width="14" height="14" fill={color} />
      </svg>

      {variant === "full" && (
        <span style={{ fontWeight: 600, fontSize: 18 }}>
          OrByZ <span style={{ color }}>Studio</span>
        </span>
      )}
    </div>
  );
}
