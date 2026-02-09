import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/Card";
import { LuReceiptText } from "react-icons/lu";

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;

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
            <div className="font-medium">{payload[0].name}</div>
            <div>{payload[0].value}</div>
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

  const chartData = [
    { name: "Completed", value: Number(finalData.completed), color: "#10B981" },
    { name: "Open", value: Number(finalData.open), color: "#3B82F6" },
    { name: "In Progress", value: Number(finalData.in_progress), color: "#F59E0B" },
    { name: "On Hold", value: Number(finalData.on_hold), color: "#6B7280" },
    { name: "Cancelled", value: Number(finalData.cancelled), color: "#EF4444" },
  ];

  const total = Number(finalData.total_complaints);

    return (
        <Card
            className="h-[267px]"
            title={
                <div className="flex items-center gap-2">
                    <LuReceiptText className="!text-[20px] text-[#EF4444]" />
                    <div className="font-medium text-[#121212]">Ticket Status</div>
                </div>
            }
            period={<span className="text-[12px] leading-[16px] text-[#64748B]">Today</span>}
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
  <div>{Number(finalData.completed)}</div>
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
                            className="flex items-center justify-between text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-[7px] w-[16px]"
                                    style={{ backgroundColor: item.color }}
                                />
                                <div className="text-gray-500">{item.name}</div>
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
