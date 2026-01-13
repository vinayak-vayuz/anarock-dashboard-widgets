import { Card, Chip, CustomTooltip } from "../../utils";
import { LuMessageSquare } from "react-icons/lu";
import {
  Cell,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ActionButtons } from "../../components/ActionButtons";

export const dummyEngagementData = {
  total_notices: 12,
  total_topics: 45,
  total_polls: 8,
  total_surveys: 5,
};

function Engagement({ isStatic, data, communities }) {
  const COLORS = ["#8B5CF6", "#22C55E", "#3B82F6", "#F59E0B"];

  const engagementBars = [
    {
      name: "Notice",
      value: Number(data?.total_notices || 0),
      color: COLORS[0],
    },
    { name: "Post", value: Number(data?.total_topics || 0), color: COLORS[1] },
    { name: "Poll", value: Number(data?.total_polls || 0), color: COLORS[2] },
    {
      name: "Survey",
      value: Number(data?.total_surveys || 0),
      color: COLORS[3],
    },
  ];

  return (
    <Card
      title="Engagement"
      period="This Month"
      icon={<LuMessageSquare className="!text-[24px] text-[#DBB467]" />}
      className={`${isStatic && "max-h-[303px]"} h-[303px]`}
      actionButtons={
        <ActionButtons
          widgetId={data?.widget_id}
          options={data?.communities}
          onFilterChange={(value, widget) => console.log(value, widget)}
          onExport={(widget) => console.log("Export triggered for", widget)}
        />
      }
    >
      <div className="w-full h-[235px] !mt-[20px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={engagementBars}
            layout="vertical"
            margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              stroke="#e5e7eb"
              strokeDasharray="3 3"
              horizontal={false}
            />

            <YAxis
              type="category"
              dataKey="name"
              width={40}
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 10,
                lineHeight: 14,
                fill: "#121212",
                fontWeight: 400,
              }}
            />

            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 10,
                lineHeight: 14,
                fill: "#64748B",
                fontWeight: 400,
              }}
            />

            <RTooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />

            <Bar dataKey="value" barSize={40} isAnimationActive={false}>
              {engagementBars.map((entry, i) => (
                <Cell key={entry.name} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default Engagement;
