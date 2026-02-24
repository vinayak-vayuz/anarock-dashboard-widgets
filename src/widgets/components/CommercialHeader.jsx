import React from "react";
import { FiCalendar, FiChevronDown, FiDownload } from "react-icons/fi";

function CommercialHeader({
  text = "Smart Access",
  Icon,
  iconColor = "#329DFF",
}) {
  return (
    <div className="px-5 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon ? (
            <div className="flex items-center justify-center">
              <Icon size={20} style={{ color: iconColor }} />
            </div>
          ) : null}

          <div className="text-[24px] leading-[32px] font-semibold text-[#121212]">
            {text}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-[#EBEBEB] text-sm font-medium text-[#64748B] hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center">
              <FiCalendar size={16} />
            </div>
            <div>Today</div>
            <div className="flex items-center">
              <FiChevronDown size={16} />
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#EBEBEB] bg-white text-[#7C3AED] text-[14px] font-medium hover:bg-[#E9D5FF] transition cursor-pointer">
            <div>Export Report</div>
            <div className="flex items-center">
              <FiDownload size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-dashed border-[#E2E8F0]" />
    </div>
  );
}

export default CommercialHeader;
