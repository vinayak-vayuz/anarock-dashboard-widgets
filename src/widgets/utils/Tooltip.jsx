// components/FixTooltip.js

const FixTooltip = ({ children, active, payload, coordinate, data, offsetX = 70, offsetY = 40 }) => {
  if (!active || !payload?.length) return null;

  const isLastPoint =
    payload[0]?.payload === data[data.length - 1];

  const xPosition = isLastPoint
    ? coordinate.x - offsetX
    : coordinate.x;

  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(${xPosition}px, ${coordinate.y - offsetY}px)`,
        pointerEvents: "none",
        zIndex: 99999,
      }}
    >
      {children}
    </div>
  );
};

export default FixTooltip;