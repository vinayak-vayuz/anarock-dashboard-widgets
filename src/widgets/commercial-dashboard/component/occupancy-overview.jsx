import React from "react";
import { GoPeople } from "react-icons/go";

const MiniPill = ({ value = 0, total = 1, colorClass = "", label = "" }) => {
  const safeValue = Number(value) || 0;
  const safeTotal = Number(total) || 1;

  const pct = Math.max(0, Math.min(100, (safeValue / safeTotal) * 100));

  const valueTextColor =
    colorClass === "bg-[#3C81F6]"
      ? "text-[#8B5CF6]"
      : colorClass === "bg-[#8B5CF6]"
        ? "text-[#12B981]"
        : "text-slate-600";
  return (
    <div className="flex flex-col items-start">
      <div className="w-2/3 min-w-[80px] h-5 rounded-full overflow-hidden">
        <div
          className={`h-[11px] rounded-full ${colorClass || ""}`}
          style={{
            width: colorClass === "bg-[#12B981]" ? `${pct + 45}%` : `${pct}%`,
          }}
        />
      </div>

      <div className={`${valueTextColor} !text-[12px] font-bold mt-1`}>
        {safeValue ?? 0}
      </div>

      <div className="!text-[12px] leading-[16px] text-[#64748B] mt-1">
        {label ?? ""}
      </div>
    </div>
  );
};

const OccupancyOverviewCard = ({
  data,
  occupiedUnits = 1,
  EmployeesCount = 8910,
  AdminsCount = 910,
}) => {
  const totalOccupants =
    data?.total_occupants !== undefined && data?.total_occupants !== null
      ? Number(data?.total_occupants) || 0
      : Number(occupiedUnits) || 0;

  const employees =
    data?.total_members !== undefined && data?.total_members !== null
      ? Number(data?.total_members) || 0
      : Number(EmployeesCount) || 0;

  const admins =
    data?.total_admins !== undefined && data?.total_admins !== null
      ? Number(data?.total_admins) || 0
      : Number(AdminsCount) || 0;

  const barTotal = (employees || 0) + (admins || 0);

  return (
    <div>
      <div className="bg-white !border-[0.5px] !border-[#EBEBEB] rounded-xl shadow-[0_0_12px_0_#EAF2FF] p-[16px] h-[128px]">
        <div
          className="flex items-center gap-[12px] h-[20px]"
          style={{ marginBottom: "24px" }}
        >
          <GoPeople className="!text-[20px] text-[#329DFF]" />
          <div className="font-medium text-[#121212] text-[16px] leading-[20px]">
            Occupancy Overview
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-[4px]">
            <div className="text-[12px] leading-[16px] text-[#64748B] font-normal">
              Total Occupants
            </div>

            <div className="text-[28px] leading-[32px] font-medium text-[#121212]">
              {totalOccupants ?? 0}
            </div>
          </div>

          <div className="flex items-end gap-1">
            <MiniPill
              value={employees ?? 0}
              total={barTotal || 1}
              colorClass="bg-[#3C81F6]"
              label={(employees ?? 0) <= 1 ? "Employee" : "Employees"}
            />

            <MiniPill
              value={admins ?? 0}
              total={barTotal || 1}
              colorClass="bg-[#8B5CF6]"
              label={(admins ?? 0) <= 1 ? "Admin" : "Admins"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyOverviewCard;
