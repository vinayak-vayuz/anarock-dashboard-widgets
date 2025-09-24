import React from "react";
import UnitStatusPie from "./component/UnitStatusPie";
import OccupancyOverviewCard from "./component/OccupancyOverviewCard";
import ResidentOverviewCard from "./component/ResidentOverviewCard";
import MoveInOutTrendsCard from "./component/MoveInOutTrendsCard";
import BlockWiseOccupancyCard from "./component/BlockWiseOccupancyCard";
import Header from "../../../components/ui/Header"

function Community() {
  return (
    <div>
      <Header title="Community" description="Units, residents, and occupancy details" />
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <UnitStatusPie isStatic={false} />
        <OccupancyOverviewCard isStatic={false}/>
        <ResidentOverviewCard isStatic={false}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 px-5">
        <BlockWiseOccupancyCard isStatic={false}/>
        <MoveInOutTrendsCard isStatic={false}/>
      </div>
    </div>
  );
}

export default Community;
