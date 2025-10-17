import { Card, Chip, CustomTooltip } from "../../utils";
import { LuBuilding } from "react-icons/lu";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RTooltip,
  ResponsiveContainer,
} from "recharts";

export const dummyCommunityData = {
  thisMonthMoveIns: 45,
  thisMonthMoveOuts: 30,
  lastMonthMoveIns: 38,
  lastMonthMoveOuts: 35,
  moveInPercentChange: 18.4,
  moveOutPercentChange: -14.3,
};

function Community({ isStatic, data = dummyCommunityData }) {
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

  const COLORS = ["#8B5CF6", "#EBE4F9"];

  const communitySplit = [
    { name: "Move-ins", value: moveIns, color: COLORS[0] },
    { name: "Move-outs", value: moveOuts, color: COLORS[1] },
  ];

  /**
   * Calculate average move-in/out percentage change
   * @param {number} moveInPercentChange - Move-in percentage change (can be negative)
   * @param {number} moveOutPercentChange - Move-out percentage change (can be negative)
   * @returns {string} Average percentage as string with "%" sign
   */
  function calculateAverageMoveChange(
    moveInPercentChange,
    moveOutPercentChange
  ) {
    const avg =
      (Number(moveInPercentChange) + Number(moveOutPercentChange)) / 2;
    return avg.toFixed(2) + "%";
  }

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
            <Chip
              value={calculateAverageMoveChange(moveInChange, moveOutChange)}
            />
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
                <Cell fill={COLORS[0]} />
                <Cell fill={COLORS[1]} />
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
