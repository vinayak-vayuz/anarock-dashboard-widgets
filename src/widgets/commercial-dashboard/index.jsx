import React, { useState } from "react";
import OccupancyOverviewCard from "./component/occupancy-overview";
import EmployeeFootfall from "./component/employee-footfall";
import VisitorUpdates from "./component/visitor-updates";
import TicketStatus from "./component/ticket-status";
import TicketEscalation from "./component/ticket-escalation";
import Engagement from "../overview/components/Engagement";
import Amenities from "./component/amenities";
import FoodBeverages from "./component/food-beverages";


function CommercialDashboard() {


  return (
    <>
      <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 mt-6 auto-rows-fr">
        <OccupancyOverviewCard />
        <EmployeeFootfall />
      </div>
      <div className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 auto-rows-fr">
        <div className="mt-[-115px]">
          <VisitorUpdates />
        </div>
        <TicketStatus />
        <TicketEscalation />
      </div>
      <div className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 auto-rows-fr">
        <Engagement />
        <Amenities/>
        <FoodBeverages />
      </div>
    </>
  );
}

export default CommercialDashboard;
