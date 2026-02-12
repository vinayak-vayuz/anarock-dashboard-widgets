import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/Card";
import { LuReceiptText } from "react-icons/lu";
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const dotColor = item.payload.color;

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "8px 10px",
        borderRadius: "8px",
        fontSize: "12px",
      }}
    >
      <div className="flex items-center gap-2 font-medium">
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: dotColor,
          }}
        />

        <div>{item.name}</div>

        <div className="ml-2">{item.value}</div>
      </div>
    </div>
  );
};


 function TicketStatus({ data = null }) {
  const staticApiData = {
    open: 12,
    on_hold: 5,
    cancelled: 3,
    completed: 156,
    in_progress: 8,
    total_complaints: 184,
  };

  const finalData = data ? data : staticApiData;

  const safeNumber = (value) => {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
};
const chartData = [
  { name: "Completed", value: safeNumber(finalData.completed), color: "#10B981" },
  { name: "Open", value: safeNumber(finalData.open), color: "#3B82F6" },
  { name: "In Progress", value: safeNumber(finalData.in_progress), color: "#F59E0B" },
  { name: "On Hold", value: safeNumber(finalData.on_hold), color: "#6B7280" },
  { name: "Cancelled", value: safeNumber(finalData.cancelled), color: "#EF4444" },
];

  const total = safeNumber(finalData.total_complaints);

    return (
        <Card
            className="h-[267px]"
             title="Ticket Status"
            period="Today"
            icon={<LuReceiptText className="!text-[24px] text-[#EF4444]" />}
        >
            <div className="flex h-full items-center gap-4">

                <div className="w-[202px] h-[170px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                innerRadius={55}
                                outerRadius={85}
                                dataKey="value"
                                stroke="#FFFFFF"
                                strokeWidth={2}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                content={<CustomTooltip />}
                                wrapperStyle={{ zIndex: 1000 }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <div className="flex items-baseline text-[18px] leading-[22px] font-medium text-[#121212]">
  <div>{safeNumber(finalData.completed)}</div>
  <div className="text-[18.18px] leading-[22.22px] text-[#121212]">
    /{total}
  </div>
</div>

            <div className="text-[10.1px] leading-[14.14px] text-[#64748B]">
              Completed
            </div>
          </div>
        </div>
                <div className="flex-1 space-y-2">
                    {chartData.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between text-[12px] leading-[17px] mt-[12px]"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-[7px] w-[16px]"
                                    style={{ backgroundColor: item.color }}
                                />
                                <div className="text-[12px] leading-[16px] text-[#64748B]">{item.name}</div>
                            </div>
                            <div className="text-[#64748B] text-[12px] leading-[16px] font-medium">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default TicketStatus;
