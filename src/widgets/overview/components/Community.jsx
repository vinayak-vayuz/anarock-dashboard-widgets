import React from "react";
import Card from "../../components/Card";
import { LuBuilding } from "react-icons/lu";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RTooltip,
  ResponsiveContainer,
} from "recharts";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

function Community({ isStatic, data }) {
  const Chip = ({ value }) => {
    const safeValue = value ?? 0; // ensure value is a number
    const isPositive = safeValue >= 0;
    return (
      <div
        className={`w-fit p-1 rounded text-[10px] leading-[14px] font-medium flex items-center gap-1 ${
          isPositive
            ? "bg-[#F7FEFA] text-[#1FA05B]"
            : "bg-[#FFF2F2] text-[#AB0000]"
        }`}
      >
        {isPositive ? <FaCaretUp /> : <FaCaretDown />}
        {safeValue}%
      </div>
    );
  };

  const moveIns = Number(data?.thisMonthMoveIns ?? data?.lastMonthMoveIns ?? 0);
  const moveOuts = Number(
    data?.thisMonthMoveOuts ?? data?.lastMonthMoveOuts ?? 0
  );
  const moveInChange = Number(
    data?.moveInPercentChange ?? data?.moveInChange ?? 0
  );
  const moveOutChange = Number(
    data?.moveOutPercentChange ?? data?.moveOutChange ?? 0
  );

  const communitySplit = [
    { name: "Move-ins", value: moveIns },
    { name: "Move-outs", value: moveOuts },
  ];

  const COLORS = {
    purple: "#8B5CF6",
    indigo: "#6366F1",
  };

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="bg-black text-white !text-[12px] px-3 py-2 rounded-lg shadow-lg">
        {payload.map((item, i) => (
          <div
            key={i}
            className="capitalize flex gap-[4px] items-center leading-relaxed"
          >
            <div
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: item.color,
                marginRight: 6,
              }}
            ></div>
            {item.name}: <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card
      title="Community"
      period="This Month"
      icon={<LuBuilding className="!text-[24px] text-[#329DFF]" />}
      className={`${
        isStatic && "max-h-[184px]"
      } h-[184px] mb-4 break-inside-avoid`}
    >
      <div className="flex">
        <div className="w-[50%] flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[8px]">
            <div className="!m-0 !text-[12px] !leading-[16px] !text-[#64748B]">
              Move-in/Out Count
            </div>
            <div className="!m-0 !text-[28px] !leading-[32px] !font-medium !text-[#8B5CF6]">
              {moveIns + moveOuts}
            </div>
          </div>
          <div className="!m-0 !text-[10px] !leading-[14px] !text-[#64748B] flex items-center gap-[4px]">
            <Chip value={((moveInChange + moveOutChange) / 2).toFixed(2)} />
            <div className="whitespace-nowrap">Compared to last month</div>
          </div>
        </div>

        <div className="w-[50%] h-[111px] flex justify-end">
          <ResponsiveContainer width="75%" height="100%">
            <PieChart>
              <Pie
                data={communitySplit}
                innerRadius={36}
                outerRadius={52}
                paddingAngle={2}
                dataKey="value"
              >
                <Cell fill={COLORS.purple} />
                <Cell fill={COLORS.indigo} />
              </Pie>
              <RTooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

export default Community;
