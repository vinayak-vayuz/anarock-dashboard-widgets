import { Card, Chip, CustomTooltip } from "../../utils";
import { LuWrench } from "react-icons/lu";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RTooltip,
  ResponsiveContainer,
} from "recharts";

const dummyHelpdeskData = {
  today_open_complaints: 42,
  percent_change: "-12%",
  today_L1: 15,
  today_L2: 10,
  today_L3: 12,
  today_L4: 5,
};

function Helpdesk({ isStatic, data }) {
  const COLORS = ["#1FA05B", "#E7A015", "#FA7E28", "#EF4444", "#CBD5E1"];

  const helpdeskBreakup = [
    { name: "L1 Level", value: Number(data?.today_L1 || 0), color: COLORS[0] },
    { name: "L2 Level", value: Number(data?.today_L2 || 0), color: COLORS[1] },
    { name: "L3 Level", value: Number(data?.today_L3 || 0), color: COLORS[2] },
    { name: "L4 Level", value: Number(data?.today_L4 || 0), color: COLORS[3] },
  ];

  const total = helpdeskBreakup.reduce((sum, d) => sum + d.value, 0);

  const chartData = helpdeskBreakup;

  return (
    <Card
      title="Helpdesk"
      period="As of Today"
      icon={<LuWrench className="!text-[24px] text-[#FA7E28]" />}
      className={`${
        isStatic && "max-h-[186px]"
      } h-[186px] mb-4 break-inside-avoid`}
    >
      <div className="flex gap-[12px] h-fit">
        <div className="w-[50%] flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[8px]">
            <div className="!m-0 !text-[12px] !leading-[16px] !text-[#64748B]">
              Un-resolved Complaints
            </div>
            <div className="!m-0 !text-[28px] !leading-[32px] !font-medium text-[#FA7E28]">
              {data?.today_open_complaints ?? 0}
            </div>
          </div>

          <div className="!m-0 !text-[10px] !leading-[14px] !text-[#64748B] flex items-center gap-[4px]">
            <Chip value={data?.percent_change} />
            <div className="whitespace-nowrap">Compared to yesterday</div>
          </div>
        </div>
        <div className="w-[50%] h-[110px] flex justify-end">
          <ResponsiveContainer width="75%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={36}
                outerRadius={52}
                paddingAngle={2}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index] || "#CBD5E1"} />
                ))}
              </Pie>
              <RTooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

export default Helpdesk;
