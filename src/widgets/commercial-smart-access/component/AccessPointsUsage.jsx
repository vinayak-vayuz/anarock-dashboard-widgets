import React from "react";
import Card from "../../components/CardNoLogo";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Legend,
} from "recharts";
import { CommercialCustomTooltip } from "../../utils";
import EmptyState from "../../utils/EmptyState";

function AccessPointsUsage({ data = [] }) {
  // Updated data with entries + exit
  const staticData = [
    { block_name: "Google", entries: 4, exit: 4 },
    { block_name: "Uber", entries: 3, exit: 3 },
    { block_name: "ANAROCK", entries: 3, exit: 3 },
    { block_name: "Flipkart", entries: 2, exit: 2 },
    { block_name: "HP", entries: 22, exit: 1 },
  ];
  const [hiddenKeys, setHiddenKeys] = React.useState([]);

  // ❗ FIX: don't fallback to staticData when empty array is passed
  const finalData = data && data.length ? data : [];

  // ✅ NEW: check empty
  const isEmpty = !data || data.length === 0;

  // ✅ EXISTING: check if all values are zero
  const isAllZero =
    data &&
    data.length > 0 &&
    data.every(
      (item) => Number(item.entries) === 0 && Number(item.exit) === 0
    );

  // ✅ NEW: combined condition
  const showEmptyState = isEmpty || isAllZero;
  const formatYAxis = (value) => {
    if (value >= 1000) return `${value / 1000}K`;
    return value;
  };

  const handleLegendClick = (key) => {
    setHiddenKeys((prev) => {
      if (prev.includes(key)) {
        return prev.filter((item) => item !== key);
      } else {
        return [...prev, key];
      }
    });
  };

  return (
    <Card title="Access Points Usage" titleWeight="semi-bold" className="h-[362px]">

      {/* ✅ UPDATED: Empty State Condition */}
      {showEmptyState ? (
        <div className="h-[270px] flex items-center justify-center">
          <EmptyState
            title="No access Point Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        </div>
      ) : (

      <div className="mt-[24px] h-[270px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={finalData}
            barSize={54}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="8 8" vertical={false} />
            <ReferenceLine y={0} stroke="#EBEBEB" />

            <XAxis
              dataKey="block_name"
              tick={{ fontSize: 12, fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fontSize: 12, fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />

<Tooltip
  cursor={false}
  wrapperStyle={{ zIndex: 1000 }}
  content={(props) => {
    if (!props.active || !props.label) return null;

    const fullData = finalData.find(item => item.block_name === props.label);

    return (
      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "8px 14px",
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          fontSize: "13px",
        }}
      >
        <div style={{ fontWeight: 600 }}>
          {props.label}
        </div>

        {!hiddenKeys.includes("entries") && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#329DFF",
              }}
            />
            <div style={{ color: "#aaa" }}>Entries</div>
            <div style={{ fontWeight: 700 }}>
              {fullData?.entries ?? 0}
            </div>
          </div>
        )}

        {!hiddenKeys.includes("exit") && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#76BDFF",
              }}
            />
            <div style={{ color: "#aaa" }}>Exit</div>
            <div style={{ fontWeight: 700 }}>
              {fullData?.exit ?? 0}
            </div>
          </div>
        )}
      </div>
    );
  }}
/>

            <Legend
              verticalAlign="bottom"
              height={36}
              content={() => {
                const items = [
                  { key: "entries", label: "Entries", color: "#329DFF" },
                  { key: "exit", label: "Exit", color: "#76BDFF" },
                ];

                return (
                  <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
                    {items.map((item, index) => {
                      const isHidden = hiddenKeys.includes(item.key);

                      return (
                        <div
                          key={index}
                          onClick={() => handleLegendClick(item.key)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            cursor: "pointer",
                            opacity: isHidden ? 0.4 : 1,
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "8px",
                              backgroundColor: item.color,
                            }}
                          />
                          <div style={{ fontSize: "12px", color: "#64748B" }}>
                            {item.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            />

            <Bar
              dataKey="entries"
              stackId="a"
              fill="#329DFF"
              hide={hiddenKeys.includes("entries")}
            />

            <Bar
              dataKey="exit"
              stackId="a"
              fill="#76BDFF"
              hide={hiddenKeys.includes("exit")}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      )}

    </Card>
  );
}

export default AccessPointsUsage;