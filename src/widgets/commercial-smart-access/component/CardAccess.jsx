import React from "react";
import Card from "../../components/CardNoLogo";

function AccessStatsCard({
  title = "Access",
  data = [],
  height = "h-[362px]",
}) {
  const formatNumber = (num) => {
    if (num === null || num === undefined) return "0";
    return Number(num).toLocaleString();
  };

  return (
    <Card className={height} title={title} titleWeight="semi-bold">
      <div className="rounded-xl overflow-hidden mt-[16px]">
        <div className="grid grid-cols-2 bg-[#F8FAFC] py-[8px] px-[12px] text-[12px] leading-[16px] font-medium text-[#64748B]">
          <div>Point</div>
          <div className="text-right">Access</div>
        </div>

        {data.map((row, index) => (
          <div
            key={index}
            className={`grid grid-cols-2 p-[12px] text-[14px] border-t border-[#E2E8F0]`}
          >
            <div className="text-[12px] leading-[16px] text-[#64748B]">
              {row.label}
            </div>

            <div
              className="text-[12px] leading-[16px] text-right font-medium"
                style={{ color: row.color || "#000" }}
            >
              {formatNumber(row.value)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default AccessStatsCard;
