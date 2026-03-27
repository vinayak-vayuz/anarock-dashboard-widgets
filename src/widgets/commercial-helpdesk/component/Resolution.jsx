import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export default function MetricCard({
  icon: Icon,
  iconColor = "#329DFF",
  title,
  value,
  percentage,
  percentageText,
}) {
  const numericPercentage = parseFloat(percentage);
  const isPositive = numericPercentage >= 0;
  const percentageColor = isPositive ? "#16A34A" : "#DC2626";

  return (
    <div className="relative bg-white !border-[0.5px] !border-[#EBEBEB] !rounded-[12px] !shadow-[0_0_12px_0_#EAF2FF] p-[16px]">
      <div className="flex items-center gap-[8px]">
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

        <div className="text-[20px] leading-[100%] tracking-[-2%] font-medium text-[#64748B]">
          {title}
        </div>
      </div>

      <div className="mt-[16px] text-[28px] leading-[32px] font-medium text-[#121212]">
        {value}
      </div>

      {(percentage || percentageText) && (
        <div className="mt-[12px] flex items-center gap-[8px]">
          {percentage && (
            <div
              className="flex items-center gap-[4px] text-[10px] leading-[14px] font-medium"
              style={{ color: percentageColor }}
            >
              {isPositive ? <FaCaretUp /> : <FaCaretDown />}
              {Math.abs(numericPercentage)}%
            </div>
          )}

          {percentageText && (
            <div className="text-[10px] leading-[14px] text-[#64748B]">
              {percentageText}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
