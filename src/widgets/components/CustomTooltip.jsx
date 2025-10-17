const Dot = ({ color }) => (
  <span
    style={{
      display: "inline-block",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: color,
      marginRight: "6px",
    }}
  />
);

export const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-black text-white !text-[12px] px-3 py-2 rounded-lg shadow-lg">
      {payload.map((item, i) => (
        <div
          key={i}
          className="capitalize flex gap-[4px] items-center leading-relaxed"
        >
          <Dot color={item.color} />
          {item.name}: <div className="font-semibold">{item.value}</div>
        </div>
      ))}
    </div>
  );
};