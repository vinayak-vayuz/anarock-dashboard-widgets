import React, { useState } from "react";
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
import EmptyState from "../../utils/EmptyState";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../components/datepicker.css";
import { CommercialCustomTooltip } from "../../utils";
import CustomDropdown from "../../components/CustomDropdown";

const TenantsByVisitors = ({ data = []}) => {

     const [selectedBuilding, setSelectedBuilding] = useState("Kosmo One");

  const buildingOptions = ["Kosmo One", "Kosmo Two", "Kosmo Three"];

    const chartData = Array.isArray(data) ? data : [];

    const isEmpty =
        !chartData.length || chartData.every((item) => item.no_of_visitors === 0);
    return (
        <Card
            title="Top 5 Tenants by Visitors"
            titleWeight="semi-bold"
            className="h-[360px]"
            childrenClassName="mt-[20px]"
             rightContent={
    <CustomDropdown
      options={buildingOptions}
      value={selectedBuilding}
      onChange={(val) => setSelectedBuilding(val)}
    />
  }
        >
            {isEmpty ? (
                <div className="w-full h-[280px] flex items-center justify-center">
                    <EmptyState
                        title="No Visitors Found"
                        description="Catch up all the data. Change the date range to see the data."
                    />
                </div>
            ) : (
                <div className="w-full h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{ top: 10, right: -10, left: -10, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366F1" stopOpacity={0.25} />
                                    <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#F1F5F9"
                            />

                            <XAxis
                                dataKey="day"
                                type="category"
                                scale="point"
                                padding={{ left: 20, right: 20 }}
                                tick={{ fontSize: 12, fill: "#64748B" }}
                                axisLine
                                tickLine={false}
                                tickFormatter={(value) =>
                                    new Date(value).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                    })
                                }
                            />

                            <YAxis
                                width={35}
                                tick={{ fontSize: 12, fill: "#64748B" }}
                                axisLine={false}
                                tickLine={false}
                                allowDecimals={false}
                                domain={[0, "dataMax + 2"]}
                            />
                            <Tooltip
                                cursor={false}
                                content={({ active, payload, label, coordinate }) => {
                                    if (!active || !payload?.length) return null;

                                    const formattedLabel = new Date(label).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                    });

                                    return (
                                        <CommercialCustomTooltip
                                            active={active}
                                            payload={payload}
                                            label={formattedLabel}
                                        />
                                    );
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="no_of_visitors"
                                stroke="#6366F1"
                                strokeWidth={2}
                                fill="url(#colorVisitors)"
                                dot={{
                                    r: 5,
                                    stroke: "#6366F1",
                                    strokeWidth: 2,
                                    fill: "#fff",
                                }}
                                activeDot={(props) => {
                                    const { cx, cy, stroke } = props;

                                    return (
                                        <g>
                                            <circle
                                                cx={cx}
                                                cy={cy}
                                                r={6}
                                                fill="#fff"
                                                stroke={"#6466F1"}
                                                strokeWidth={2}
                                            />

                                            <circle
                                                cx={cx}
                                                cy={cy}
                                                r={2.5}
                                                fill={"#6466F1"}
                                            />
                                        </g>
                                    );
                                }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            )}
        </Card>
    );
};

export default TenantsByVisitors;
