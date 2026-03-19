import React from "react";
import Card from "../../components/CardNoLogo";

const BuildingWiseApprovals = ({ data }) => {
  const dummyData = [
    { name: "Kosmo One", total: 29, pending: 1, cancelled: 2 },
    { name: "OWC", total: 23, pending: 9, cancelled: 3 },
    { name: "Exora", total: 40, pending: 12, cancelled: 1 },
    { name: "OIC - T3", total: 27, pending: 19, cancelled: 8 },
  ];

  const tableData = data && data.length ? data : dummyData;

  return (
    <Card
      title="Building Wise Approvals"
      titleWeight="semi-bold"
      className="h-full"
      childrenClassName="mt-[34px]"
    >
      <div className="w-full border border-[#EBEBEB] rounded-[10px] overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-4 bg-[#FAFAFA] px-[12px] py-[8px] text-[12px] leading-[16px] font-semibold text-[#64748B]">
          <div>Tenant</div>

          <div className="flex justify-end">
            Total
          </div>

          <div className="flex justify-end">
            Pending
          </div>

          <div className="flex justify-end">
            Cancelled
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[280px] overflow-y-auto hide-scrollbar">
          {tableData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 p-[12px] text-[12px] leading-[16px] border-t border-[#EBEBEB]"
            >
              {/* Tenant */}
              <div className="text-[#475569]">
                {item.name}
              </div>

              {/* Total */}
              <div className="flex justify-end text-[#36AB6C] font-[400]">
                {item.total}
              </div>

              {/* Pending */}
              <div className="flex justify-end text-[#F2A815] font-[400]">
                {item.pending}
              </div>

              {/* Cancelled */}
              <div className="flex justify-end text-[#AB0000] font-[400]">
                {item.cancelled}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default BuildingWiseApprovals;