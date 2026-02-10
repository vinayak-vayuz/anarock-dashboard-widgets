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

  const data = {"OVERVIEW_AMENITIES": {
                  "amenitySummary": {
                      "totalBookings": 10,
                      "todayPaidRevenue": "2.00",
                      "growth_percentage": 12
                  },
                  "chartData": [
                      {
                          "facility_name": "Seminar Hall",
                          "paid_bookings": 4,
                          "paid_revenue": "0.00",
                          "isPaid": true
                      },
                      {
                          "facility_name": "Badminton",
                          "paid_bookings": 4,
                          "paid_revenue": "0.00",
                          "isPaid": true
                      },
                      {
                          "facility_name": "HDFC ATM",
                          "unpaid_bookings": 15,
                          "isPaid": false
                      }
                  ]
              },}
  console.log("test 123");
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
        <Amenities data={data} />
        <FoodBeverages />
      </div>
    </>
  );
}

export default CommercialDashboard;
