import React from "react";
import { GoPeople } from "react-icons/go";
import Card from "../../../components/ui/Card";
const MiniPill = ({ value = 0, total = 1, colorClass = "", label = "" }) => {
  const pct = Math.max(0, Math.min(100, (value / (total || 1)) * 100));

  const valueTextColor = colorClass.includes("indigo")
    ? "text-indigo-600"
    : colorClass.includes("emerald")
    ? "text-emerald-600"
    : "text-slate-600";

  return (
    <div className="flex flex-col items-start">
      <div className="w-[120px]">
        <div
          className={`h-3 rounded-full ${colorClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className={`${valueTextColor} text-xs font-bold mt-1`}>{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
};

const StatTile = ({ title, value, suffix, valueClass = "" }) => (
  <div className="bg-white border border-[#EBEBEB] rounded-xl shadow-[0_0_12px_0_#EAF2FF] p-4">
    <div className="text-xs text-black font-semibold mb-1">{title}</div>
    <div className={`text-3xl font-semibold ${valueClass}`}>
      {value}{" "}
      {suffix && <span className="text-lg align-baseline">{suffix}</span>}
    </div>
  </div>
);

const OccupancyOverviewCard = ({
  totalUnits = 847,
  occupiedUnits = 756,
  ownerCount = 700,
  tenantCount = 56,
  avgResidents = 4.4,
  avgLeaseMonths = 18,
}) => {
  const barTotal = ownerCount + tenantCount;

  return (
    <div className="space-y-4">
      <Card
        title="Occupancy Overview"
        icon={<GoPeople className="h-6 w-6 text-indigo-600" />}
      >
        <div className="flex items-center flex-wrap justify-between gap-6">
          <div>
            <div className="text-xs text-slate-500">Occupied Units</div>
            <div className="text-4xl font-semibold text-slate-900">
              {occupiedUnits}
              <span className="text-slate-400 text-2xl ml-1">
                /{totalUnits}
              </span>
            </div>
          </div>

          <div className="flex items-end">
            <MiniPill
              value={ownerCount}
              total={barTotal}
              colorClass="bg-indigo-500"
              label="Owner"
            />
            <MiniPill
              value={tenantCount}
              total={barTotal}
              colorClass="bg-emerald-500"
              label="Tenant"
            />
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-6">
        <StatTile
          title="Avg Residents Per Unit"
          value={avgResidents}
          valueClass="text-[#8B5CF6]"
        />
        <StatTile
          title="Avg Lease Period"
          value={avgLeaseMonths}
          suffix="months"
          valueClass="text-[#E7A015]"
        />
      </div>
    </div>
  );
};

export default OccupancyOverviewCard;
