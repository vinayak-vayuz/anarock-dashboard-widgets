import React from "react";
import Card from "../../components/Card";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";

const DUMMY_COMPLAINTS = [
  { title: "Maintenance", total: 12, pending: 3 },
  { title: "Security", total: 8, pending: 1 },
  { title: "Housekeeping", total: 6, pending: 2 },
  { title: "Utilities", total: 10, pending: 4 },
];

const cleanText = (text = "") =>
  text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<[^>]*>/g, "")
    .trim();

function Complaints({ data }) {
  console.log(data, "complaints data");

  const complaints =
    Array.isArray(data?.complaints_by_category) &&
    data.complaints_by_category.length > 0
      ? data.complaints_by_category.map((item) => ({
          title: cleanText(item.category_name) || "—",
          total: item.total || 0,
          pending: item.pending || 0,
        }))
      : DUMMY_COMPLAINTS;

  return (
    <Card
      title="Complaints"
      className="h-[362px]"
      titleWeight="semi-bold"
      titleClassName={"!text-[20px] !leading-[24px]"}
    >
      <div className="flex flex-col gap-[12px]">
        {complaints.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-[#F9FAFB] rounded-lg p-3 h-[62px]"
          >
            <div className="flex flex-col">
              <div className="text-[14px] leading-[18px] font-medium text-[#121212] capitalize">
                {item.title}
              </div>
              <div className="text-[12px] leading-[16px] text-[#64748B]">
                Total: {item.total}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-[14px] leading-[18px] font-medium text-red-700">
                {String(item.pending).padStart(2, "0")}
              </div>
              <div className="text-[12px] leading-[16px] text-[#64748B]">
                Pending
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Complaints;
