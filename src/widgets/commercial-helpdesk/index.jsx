import React from "react";
import CommercialHeader from "../components/CommercialHeader";
import { Headset } from "lucide-react";
import Tickets from "../community/component/UnitStatusPie";
import { LuReceiptText } from "react-icons/lu";
import MetricCard from "./component/Resolution";
import { Timer } from "lucide-react";
import TicketsPerCategory from "./component/TicketsPerCategory";

function index() {
  const dummyData = [
    {
      category_name: "Plumbing",
      total_complaints: 12,
    },
    {
      category_name: "Electrical Issues",
      total_complaints: 8,
    },
    {
      category_name: "Cleaning Services",
      total_complaints: 15,
    },
  ];
  return (
    <>
      <CommercialHeader text="Helpdesk" Icon={Headset} iconColor="#12B981" />

      <div className="flex gap-[24px] mt-[24px] px-[16px]">
        <div className="w-[380px] h-full space-y-[16px]">
          <Tickets
            title="Tickets"
            icon={<LuReceiptText className="h-6 w-6 text-[#EF4444]" />}
            firstLabel="Resolved"
            firstValue={779}
            firstColor="#12B981"
            secondLabel="Open"
            secondValue={83}
            secondColor="#AB0000"
            growthPercentage="+9.1%"
            growthColor="#1FA05B"
            growthText="Compared to last month"
            widgetType="commercial"
            totalLabel="Total"
            centerTopSize={34}
            centerBottomSize={14}
            showBottomGlow
          />

          {/* <MetricCard
            icon={Timer}
            iconColor="#329DFF"
            title="Avg. Resolution Time"
            value="4.2 hr"
          /> */}
        </div>

        <div className="flex-1">
          <TicketsPerCategory data={dummyData} />
        </div>
      </div>
    </>
  );
}

export default index;
