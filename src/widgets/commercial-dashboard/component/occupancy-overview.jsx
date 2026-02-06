import React from "react";
import { GoPeople } from "react-icons/go";

const MiniPill = ({ value = 0, total = 1, colorClass = "", label = "" }) => {
  const pct = Math.max(0, Math.min(100, (value / (total || 1)) * 100));

  const valueTextColor =
    colorClass === "bg-[#8B5CF6]"
      ? "text-[#8B5CF6]"
      : colorClass === "bg-[#12B981]"
      ? "text-[#12B981]"
      : "text-slate-600";
  return (
    <div className="flex flex-col items-start">
      <div className="w-2/3 min-w-[80px] h-3 rounded-full overflow-hidden">
        <div
          className={`h-3 rounded-full ${colorClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className={`${valueTextColor} !text-[12px] font-bold mt-1`}>
        {value}
      </div>
      <div className="!text-[12px] text-[#64748B] mt-1">{label}</div>
    </div>
  );
};

const StatTile = ({ title, value, suffix, valueClass = "" }) => (
  <div className="bg-white border border-[#EBEBEB] rounded-xl shadow-[0_0_12px_0_#EAF2FF] h-[98px] p-4 flex flex-col justify-center">
    <div className="!text-[12px] leading-[16px] text-[#121212] mb-1">
      {title}
    </div>
    <div
      className={`text-[28px] leading-[32px] flex item gap-[4px] font-medium ${valueClass}`}
    >
      {value}{" "}
      {suffix && (
        <div className="text-[28px] leading-[32px] font-medium">{suffix}</div>
      )}
    </div>
  </div>
);

const OccupancyOverviewCard = ({
  occupiedUnits = 9000,
  EmployeesCount = 8910,
  AdminsCount = 90,
}) => {
  const barTotal = EmployeesCount + AdminsCount;

  return (
    <div>
      <div className="bg-white border border-[#EBEBEB] rounded-xl shadow-[0_0_12px_0_#EAF2FF] p-4 h-[128px]">
        <div className="flex items-center gap-[12px] mb-4">
          <GoPeople className="!text-[20px] text-[#329DFF]" />
          <div className="font-medium text-[#121212]">Occupancy Overview</div>
        </div>

        <div className="flex items-center justify-between gap-">
          <div>
            <div className="text-xs leading-[16px] text-[#64748B]">
              Total Occupants
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[28px] leading-[32px] font-medium text-[#121212]">
                {occupiedUnits}
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <MiniPill
              value={EmployeesCount}
              total={barTotal}
              colorClass="bg-[#8B5CF6]"
              label="Owner"
            />
            <MiniPill
              value={AdminsCount}
              total={barTotal}
              colorClass="bg-[#12B981]"
              label="Tenant"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default OccupancyOverviewCard;
