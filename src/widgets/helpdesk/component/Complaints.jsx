import React from "react";
import Card from "../../components/Card";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";

function Complaints({ data = [] }) {
  console.log(data, "complaints data");

  // Transform API data to match component structure
  const complaints = Array.isArray(data?.complaints_by_category)
    ? data?.complaints_by_category.map((item) => ({
        title: item.category_name || "—",
        total: item.total || 0,
        pending: item.pending || 0,
      }))
    : [];

  return (
    <Card
      title={"Complaints"}
      period={<OpenInNewOutlinedIcon className="text-[20px] text-[#884EA7]" />}
      className="h-[362px]"
    >
      <div className="flex flex-col gap-[12px]">
        {complaints.length > 0 ? (
          complaints.map((item, idx) => (
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
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">No data available</div>
        )}
      </div>
    </Card>
  );
}

export default Complaints;