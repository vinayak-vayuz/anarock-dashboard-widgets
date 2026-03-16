import React from "react";
import UnitStatusPie from "./component/UnitStatusPie";
import OccupancyOverviewCard from "./component/OccupancyOverviewCard";
import ResidentOverviewCard from "./component/ResidentOverviewCard";
import MoveInOutTrendsCard from "./component/MoveInOutTrendsCard";
import BlockWiseOccupancyCard from "./component/BlockWiseOccupancyCard";
import Header from "../components/Header";

function Community({ data = {}, onExport }) {
  return (
    <div>
      <Header
        title="Community"
        description="Units, residents, and occupancy details"
        onExport={onExport}
      />
      <div className="px-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
        <UnitStatusPie data={data?.unitStatus} />
        <OccupancyOverviewCard data={data?.occupancyOverview} />
        <ResidentOverviewCard data={data?.residentOverview} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mt-4 px-[20px]">
        <BlockWiseOccupancyCard data={data?.blockWiseOccupancy} />
        <MoveInOutTrendsCard data={data?.moveInOutTrends} />
      </div>
    </div>
  );
}

export default Community;
