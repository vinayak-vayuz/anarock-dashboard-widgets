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
          className={`h-[11px] rounded-full ${colorClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className={`${valueTextColor} !text-[12px] font-bold mt-1`}>
        {value}
      </div>
      <div className="!text-[12px] leading-[16px] text-[#64748B] mt-1">{label}</div>
    </div>
  );
};

const OccupancyOverviewCard = ({
  occupiedUnits = 9000,
  EmployeesCount = 8910,
  AdminsCount = 90,
}) => {
  const barTotal = EmployeesCount + AdminsCount;

  return (
    <div>
      <div className="bg-white !border-[0.5px] !border-[#EBEBEB] rounded-xl shadow-[0_0_12px_0_#EAF2FF] p-4 h-[128px]">
        <div className="flex items-center gap-[12px] h-[20px]" style={{marginBottom :"24px"}}>
          <GoPeople className="!text-[20px] text-[#329DFF]" />
          <div className="font-medium text-[#121212]">Occupancy Overview</div>
        </div>

      <div className="flex items-start justify-between">
          <div>
            <div className="text-[12px] leading-[16px] text-[#64748B] font-normal">
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
              label="Employees"
            />
            <MiniPill
              value={AdminsCount}
              total={barTotal}
              colorClass="bg-[#12B981]"
              label="Admins"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default OccupancyOverviewCard;
