import React from "react";
import Card from "../../components/Card";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";

const requests = [
  { title: "Access Card", total: 45, pending: 11 },
  { title: "NOC Request", total: 12, pending: 7 },
  { title: "Parking Allocation", total: 8, pending: 6 },
  { title: "Document Request", total: 25, pending: 2 },
];

function RequestBox() {
  return (
    <Card
      title={"Request Box"}
      period={<OpenInNewOutlinedIcon className="text-[20px] text-[#884EA7]" />}
      className="h-[362px]"
    >
      <div className="flex flex-col gap-3">
        {requests.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-[#F9FAFB] rounded-lg p-3 h-[62px]"
          >
            <div className="flex flex-col">
              <div className="text-[14px] leading-[18px] font-medium text-[#121212]">
                {item.title}
              </div>
              <div className="!text-[12px] leading-[16px] text-[#64748B]">
                Total: {item.total}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-[14px] leading-[18px] font-medium text-red-700">
                {String(item.pending).padStart(2, "0")}
              </div>
              <div className="!text-[12px] leading-[16px] text-[#64748B]">
                Pending
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RequestBox;
