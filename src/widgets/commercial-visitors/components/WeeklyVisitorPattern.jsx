import React from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import Card from "../../components/CardNoLogo";

const data = [
    { day: "01 Feb", visitors: 1250 },
    { day: "02 Feb", visitors: 1000 },
    { day: "03 Feb", visitors: 1250 },
    { day: "04 Feb", visitors: 1050 },
    { day: "05 Feb", visitors: 900 },
    { day: "06 Feb", visitors: 1020 },
    { day: "07 Feb", visitors: 800 },
];

const WeeklyVisitorCard = () => {
    return (
        <Card
            title="Weekly Visitor Pattern"
            period="01 Feb - 07 Feb"
            isDateSelector={true}
            titleWeight="semi-bold"
            className="h-[360px]"
            childrenClassName="mt-6"
        >
            <div className="w-full h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.25} />
                                <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />

                        <XAxis
                            dataKey="day"
                            type="category"
                            scale="point"
                            padding={{ left: 20, right: 20 }}
                            tick={{ fontSize: 12, fill: "#64748B" }}
                            axisLine={true}
                            tickLine={false}
                        />
                        <YAxis
                            width={35}
                            tick={{ fontSize: 12, fill: "#64748B" }}
                            axisLine={false}
                            tickLine={false}
                            domain={[0, 1800]}
                            ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800]}
                        />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="visitors"
                            stroke="#6366F1"
                            strokeWidth={2}
                            fill="url(#colorVisitors)"
                            dot={{
                                r: 5,
                                stroke: "#6366F1",
                                strokeWidth: 2,
                                fill: "#fff",
                            }}
                            activeDot={{ r: 6 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>

            </div>
        </Card>
    );
};

export default WeeklyVisitorCard;
