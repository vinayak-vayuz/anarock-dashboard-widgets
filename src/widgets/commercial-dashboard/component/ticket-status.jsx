import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import Card from "../../components/Card";

const data = [
    { name: "Completed", value: 156, color: "#10B981" },
    { name: "Open", value: 12, color: "#3B82F6" },
    { name: "In Progress", value: 8, color: "#F59E0B" },
    { name: "On Hold", value: 5, color: "#6B7280" },
    { name: "Cancelled", value: 3, color: "#EF4444" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

function TicketStatus() {
    return (
        <Card
            className="h-[267px]"
            title={
                <div className="flex items-center gap-2">
                    <ConfirmationNumberOutlinedIcon className="text-red-500" />
                    <span className="font-semibold">Ticket Status</span>
                </div>
            }
            period={<span className="text-sm text-gray-400">Today</span>}
        >
            <div className="flex h-full items-center gap-4">

                <div className="w-[202px] h-[170px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={55}
                                outerRadius={85}
                                dataKey="value"
                                stroke="#FFFFFF"
                                strokeWidth={2}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-lg font-semibold">
                            156<span className="text-[18.18px] leading-[22.22px] text-[#121212]">/{total}</span>
                        </p>
                        <p className="text-[10.1px] leading-[14.14px] text-[#64748B]">Completed</p>
                    </div>
                </div>

                <div className="flex-1 space-y-2">
                    {data.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-[7px] w-[16px]"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-gray-500">{item.name}</span>
                            </div>
                            <span className="text-[#64748B] text-[12px] leading-[16px] font-medium">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default TicketStatus;
