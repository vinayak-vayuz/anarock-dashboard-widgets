// import React from "react";
// import { DescriptionOutlined as DescriptionOutlinedIcon } from "@mui/icons-material";
// import Card from "../../components/Card";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { FaRegClock } from "react-icons/fa6";
// import { FaArrowTrendUp } from "react-icons/fa6";

// import { LuTicketCheck } from "react-icons/lu";

// function StatCardGrid({
//   title,
//   value,
//   delta,
//   deltaLabel,
//   positive = true,
//   Icon = DescriptionOutlinedIcon,
//   iconColor = "text-emerald-600",
//   iconBg = "bg-emerald-50",
// }) {
//   return (
//     <Card
//       title={title}
//       icon={
//         <div className={`h-6 w-6 grid place-items-center`}>
//           <Icon className={`h-6 w-6 ${iconColor}`} />
//         </div>
//       }
//     >
//       <div className="text-4xl font-semibold tracking-tight text-[#121212]">
//         {value}
//       </div>
//       <div className="flex items-center gap-[8px] text-[14px]">
//         <div
//           className={
//             positive
//               ? "text-emerald-600 font-medium"
//               : "text-rose-600 font-medium"
//           }
//         >
//           {delta}
//         </div>
//         <div className="text-slate-500">{deltaLabel}</div>
//       </div>
//     </Card>
//   );
// }

// function StatCard() {
//   const cards = [
//     {
//       title: "Open Complaints",
//       value: 145,
//       delta: "+11.0%",
//       deltaLabel: "Compared to last month",
//       positive: true,
//       Icon: LuTicketCheck,
//       iconColor: "text-[#AB0000]",
//     },
//     {
//       title: "Pending Requests",
//       value: 83,
//       delta: "+2.0%",
//       deltaLabel: "Compared to last month",
//       positive: true,
//       Icon: IoDocumentTextOutline,
//       iconColor: "text-[#E7A015]",
//     },
//     {
//       title: "Avg Response Time",
//       value: "3h",
//       delta: "+11.0%",
//       deltaLabel: "Compared to last month",
//       positive: true,
//       Icon: FaRegClock,
//       iconColor: "text-[#1FA05B]",
//     },
//     {
//       title: "Resolution Rate",
//       value: "93%",
//       delta: "-8.0%",
//       deltaLabel: "Compared to last month",
//       positive: false,
//       Icon: FaArrowTrendUp,
//       iconColor: "text-[#329DFF]",
//     },
//   ];

//   return (
//     <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
//       {cards.map((card, index) => (
//         <StatCardGrid key={index} {...card} />
//       ))}
//     </div>
//   );
// }

// export default StatCard;


import React from "react";
import { DescriptionOutlined as DescriptionOutlinedIcon } from "@mui/icons-material";
import Card from "../../components/Card";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuTicketCheck } from "react-icons/lu";

function StatCardGrid({
  title,
  value,
  delta,
  deltaLabel,
  positive = true,
  Icon = DescriptionOutlinedIcon,
  iconColor = "text-emerald-600",
}) {
  return (
    <Card
      title={title}
      icon={
        <div className={`h-6 w-6 grid place-items-center`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      }
    >
      <div className="text-4xl font-semibold tracking-tight text-[#121212]">
        {value ?? "—"}
      </div>
      <div className="flex items-center gap-[8px] text-[14px]">
        <div
          className={
            positive
              ? "text-emerald-600 font-medium"
              : "text-rose-600 font-medium"
          }
        >
          {delta ?? "—"}
        </div>
        <div className="text-slate-500">{deltaLabel}</div>
      </div>
    </Card>
  );
}

function StatCard({ data }) {
  console.log(data, "stats grid data");

  // Map icon names to components
  const iconMap = {
    LuTicketCheck,
    IoDocumentTextOutline,
    FaRegClock,
    FaArrowTrendUp,
  };

  // Default configuration
  const defaultCards = [
    {
      key: "open_complaints",
      title: "Open Complaints",
      Icon: LuTicketCheck,
      iconColor: "text-[#AB0000]",
      deltaLabel: "Compared to last month",
    },
    {
      key: "pending_requests",
      title: "Pending Requests",
      Icon: IoDocumentTextOutline,
      iconColor: "text-[#E7A015]",
      deltaLabel: "Compared to last month",
    },
    {
      key: "avg_response_time",
      title: "Avg Response Time",
      Icon: FaRegClock,
      iconColor: "text-[#1FA05B]",
      deltaLabel: "Compared to last month",
    },
    {
      key: "resolution_rate",
      title: "Resolution Rate",
      Icon: FaArrowTrendUp,
      iconColor: "text-[#329DFF]",
      deltaLabel: "Compared to last month",
    },
  ];

  // Build cards from API data
  const cards = defaultCards.map((config) => {
    const apiData = data?.[config.key] || {};
    
    return {
      title: config.title,
      value: apiData.current ?? "—",
      delta: apiData.trend_percent ?? "—",
      positive: apiData.direction === "good" || apiData.direction === "neutral",
      Icon: config.Icon,
      iconColor: config.iconColor,
      deltaLabel: config.deltaLabel,
    };
  });

  return (
    <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
      {cards.map((card, index) => (
        <StatCardGrid key={index} {...card} />
      ))}
    </div>
  );
}

export default StatCard;
