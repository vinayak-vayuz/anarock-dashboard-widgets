import React from "react";
import { RiBillLine } from "react-icons/ri";
import { DescriptionOutlined as DescriptionOutlinedIcon } from "@mui/icons-material";
import Card from "../../components/Card";
import { Chip } from "../../utils";

function StatCardGrid({
  title,
  value,
  delta,
  deltaLabel,
  positive = true,
  Icon = DescriptionOutlinedIcon,
  iconColor = "text-emerald-600",
  iconBg = "bg-emerald-50",
  iconUrl,
}) {
  return (
    <Card
      title={title}
      // icon={
      //   <div className={`h-6 w-6 grid place-items-center rounded-md ${iconBg}`}>
      //     <Icon className={`h-4 w-4 ${iconColor}`} />
      //   </div>
      // }
      icon={
        <div className={`h-6 w-6 grid place-items-center rounded-md ${iconBg}`}>
          {iconUrl ? (
            <img src={iconUrl} alt="icon" className="h-4 w-4 object-contain" />
          ) : (
            <Icon className={`h-4 w-4 ${iconColor}`} />
          )}
        </div>
      }
      className="h-[132px]"
    >
      <div>
        <div className="text-[28px] leading-[32px] font-medium text-[#121212]">
          {value}
        </div>

        <div className="flex items-center gap-[8px] pt-[8px] !text-[12px] leading-[16px]">
          {/* <div
            className={`font-medium ${
              positive ? "text-[#1FA05B]" : "text-rose-600"
            } ${
              positive
                ? "bg-[#F7FEFA] text-[#1FA05B]"
                : "bg-[#FFF2F2] text-[#AB0000]"
            }`}
          >
            {delta}
          </div> */}
          <Chip value={delta} />
          <div className="text-[#64748B]">{deltaLabel}</div>
        </div>
      </div>
    </Card>
  );
}

function SingleStats({ data }) {
  const cards = [
    {
      title: data?.title || "Total Bookings",
      value: data?.value ?? 0,
      delta: data?.delta ?? "0%",
      deltaLabel: data?.deltaLabel || "Compared to last month",
      positive: data?.positive ?? false,
      Icon: data?.Icon,
      iconUrl: data?.iconUrl,
      iconColor: data?.iconColor || "text-emerald-600",
      iconBg: data?.iconBg || "bg-emerald-50",
    },
  ];

  return (
    <div className="h-full">
      {cards.map((card, index) => (
        <StatCardGrid key={index} {...card} />
      ))}
    </div>
  );
}

export default SingleStats;
