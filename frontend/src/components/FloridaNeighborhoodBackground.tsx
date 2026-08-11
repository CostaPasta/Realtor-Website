'use client';

// background-blend-mode: multiply blends the house JPG with the cream background-color,
// producing an opaque element — so front houses fully block whatever is behind them.
const CREAM = '#F8F4EC';

function Palm({
  left,
  height,
  opacity,
  flip,
  zIndex,
}: {
  left: string;
  height: number;
  opacity: number;
  flip?: boolean;
  zIndex: number;
}) {
  const width = Math.round(height * 0.542); // palm image is 1040×1920
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left,
        width,
        height,
        backgroundImage: 'url(/images/palm-silhouette.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: CREAM,
        backgroundBlendMode: 'multiply',
        opacity,
        transform: flip ? 'scaleX(-1)' : undefined,
        zIndex,
        pointerEvents: 'none',
      }}
    />
  );
}

function Houses({
  height,
  bgPosition,
  opacity,
  zIndex,
}: {
  height: string;
  bgPosition: string;
  opacity: number;
  zIndex: number;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height,
        backgroundImage: 'url(/images/house-silhouettes.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: bgPosition,
        backgroundRepeat: 'no-repeat',
        backgroundColor: CREAM,
        backgroundBlendMode: 'multiply',
        opacity,
        zIndex,
        pointerEvents: 'none',
      }}
    />
  );
}

export default function FloridaNeighborhoodBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* Back houses — faint, show upper rows (appear more distant) */}
      <Houses height="clamp(110px, 16vw, 210px)" bgPosition="center 30%" opacity={0.18} zIndex={1} />

      {/* Back palms — behind everything, faint and short */}
      <Palm left="5%"  height={130} opacity={0.20} zIndex={2} />
      <Palm left="32%" height={105} opacity={0.16} flip zIndex={2} />
      <Palm left="62%" height={120} opacity={0.18} zIndex={2} />
      <Palm left="91%" height={115} opacity={0.17} flip zIndex={2} />

      {/* Front houses — solid, block everything behind them */}
      <Houses height="clamp(140px, 20vw, 260px)" bgPosition="center 87%" opacity={0.88} zIndex={3} />

      {/* Front palms — in front of front houses, varied heights and flips */}
      <Palm left="12%" height={250} opacity={0.60} flip  zIndex={4} />
      <Palm left="28%" height={195} opacity={0.50}       zIndex={4} />
      <Palm left="48%" height={280} opacity={0.55} flip  zIndex={4} />
      <Palm left="70%" height={215} opacity={0.52}       zIndex={4} />
      <Palm left="86%" height={265} opacity={0.58} flip  zIndex={4} />

    </div>
  );
}
