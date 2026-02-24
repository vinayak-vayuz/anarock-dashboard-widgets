import React from "react";
import Card from "../../components/CardNoLogo";

function IncidentReports() {
  return (
    <Card
      title="Incident Reports"
      className="h-[362px]"
      titleWeight="semi-bold"
    >
      <div>
        <div className="flex w-full text-center gap-[24px]">
          <div className="flex-1 py-3 bg-[#FBF4F4] h-[76px] rounded">
            <div className="!text-[24px] leading-[28px] font-medium text-[#AB0000]">
              3
            </div>
            <div className="!text-[12px] leading-[16px] text-[#AB0000]">
              Open
            </div>
          </div>
          <div className="flex-1 py-3 bg-[#FFFBF2] h-[76px] rounded">
            <div className="!text-[24px] leading-[28px] font-medium text-[#E7A015]">
              5
            </div>
            <div className="!text-[12px] leading-[16px] text-[#E7A015]">
              In-progress
            </div>
          </div>
          <div className="flex-1 py-3 bg-[#F7FEFA] h-[76px] rounded">
            <div className="!text-[24px] leading-[28px] font-medium text-[#1FA05B]">
              12
            </div>
            <div className="!text-[12px] leading-[16px] text-[#1FA05B]">
              Closed
            </div>
          </div>
        </div>

        <div className="mt-4 ">
          <div className="flex items-center justify-between p-3 bg-[#FAFBFD] rounded-md border border-[#FAFBFD]">
            <div className="flex items-center gap-[8px]">
             
              <div className="text-gray-700 font-medium">INC 001</div>
            </div>
            <div className="!text-[12px] font-semibold flex items-center gap-[4px] text-[#AB0000]">
              <div>4 - Danger</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-[#FAFBFD] rounded-md border border-[#FAFBFD]">
            <div className="flex items-center gap-[8px]">
             
              <div className="text-gray-700 font-medium">INC 002</div>
            </div>
            <div className="!text-[12px] font-semibold flex items-center gap-[4px] text-[#E7A015] ">
              <div>3 - High</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-[#FAFBFD] rounded-md border border-[#FAFBFD]">
            <div className="flex items-center gap-[8px]">
             
              <div className="text-gray-700 font-medium">INC 003</div>
            </div>
            <div className="!text-[12px] font-semibold flex items-center gap-[4px] text-[#1FA05B] ">
              <div>1 - Low</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default IncidentReports;
