import React from "react";
import Card from "../../components/Card";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";

function RequestBox({ data = {} }) {
  console.log(data, "request box data");

  const requests = Array.isArray(data?.request_box_by_type)
    ? data.request_box_by_type.map((item) => ({
        title: item.category_name || "—",
        total: Number(item.total) || 0,
        pending: Number(item.pending) || 0,
      }))
    : [];


    console.log(requests,"requests");

  return (
    <Card
      title="Request Box"
      period={<OpenInNewOutlinedIcon className="text-[20px] text-[#884EA7]" />}
      className="h-[362px]"
    >
      <div className="flex flex-col gap-[12px]">
        {requests.length > 0 ? (
          requests.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="flex items-center justify-between bg-[#F9FAFB] rounded-lg p-3 h-[62px]"
            >
              {/* Left */}
              <div className="flex flex-col">
                <div className="text-[14px] leading-[18px] font-medium text-[#121212]">
                  {item.title}
                </div>
                <div className="text-[12px] leading-[16px] text-[#64748B]">
                  Total: {item.total}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-end">
                <div className="text-[14px] leading-[18px] font-medium text-red-700">
                  {String(item.pending).padStart(2, "0")}
                </div>
                <div className="text-[12px] leading-[16px] text-[#64748B]">
                  Pending
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">
            No data available
          </div>
        )}
      </div>
    </Card>
  );
}

export default RequestBox;
