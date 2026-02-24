import React from "react";

export default function MetricCard({
  icon: Icon,
  iconColor = "#329DFF",
  title,
  value,
  percentage,
  percentageText,
}) {
  const isNegative = percentage?.trim().startsWith("-");
  const percentageColor = isNegative ? "#DC2626" : "#16A34A";

  return (
    <div className="relative bg-white border border-[#EBEBEB] rounded-[12px] shadow-[0_0_12px_0_#EAF2FF] p-[16px]">
      <div className="flex items-center gap-2">
        {Icon && (
          <div
            className="h-[20px] w-[20px]"
            style={{
              color: iconColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon className="h-[20px] w-[20px]" />
          </div>
        )}

        <div className="text-[16px] leading-[20px] font-medium text-[#64748B]">
          {title}
        </div>
      </div>

      <div className="mt-[16px] text-[28px] leading-[32px] font-medium text-[#121212]">
        {value}
      </div>

      {(percentage || percentageText) && (
        <div className="mt-[12px] flex items-center gap-2">
          {percentage && (
            <div
              className="text-[12px] leading-[16px] font-medium"
              style={{ color: percentageColor }}
            >
              {percentage}
            </div>
          )}

          {percentageText && (
            <div className="text-[12px] leading-[16px] text-[#64748B]">
              {percentageText}
            </div>
          )}

        </div>
      )}
    </div>
  );
}
