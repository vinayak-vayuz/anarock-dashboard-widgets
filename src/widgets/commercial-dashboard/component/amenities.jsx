import React from "react";
import Card from "../../components/Card";
import { FaSwimmingPool } from "react-icons/fa";

function Amenities({ data }) {
  const amenitySummary = data?.amenitySummary || {};
  const chartData = Array.isArray(data?.chartData) ? data.chartData : [];

  const allUnpaid =
    chartData.length > 0 && chartData.every((item) => item?.isPaid === false);

    console.log(allUnpaid)

  const totalBookings = amenitySummary?.totalBookings || 0;

  const totalForProgress = chartData.reduce((sum, item) => {
    const bookings = item?.isPaid
      ? item?.paid_bookings || 0
      : item?.unpaid_bookings || 0;

    return sum + bookings;
  }, 0);

  const amenitiesList = chartData.map((item) => {
    const bookings = item?.isPaid
      ? item?.paid_bookings || 0
      : item?.unpaid_bookings || 0;

    const revenue = item?.isPaid ? `₹${item?.paid_revenue || "0.00"}` : "₹0.00";

    const percentage =
      totalForProgress > 0 ? Math.round((bookings / totalForProgress) * 100) : 0;

    return {
      name: item?.facility_name || "Unknown",
      bookings,
      revenue,
      percentage,
      color: item?.isPaid ? "bg-violet-500" : "bg-slate-400",
      isPaid: item?.isPaid,
    };
  });

  const growthPercentage =
    typeof amenitySummary?.growth_percentage === "number"
      ? amenitySummary.growth_percentage
      : null;

  const isGrowthPositive = growthPercentage !== null ? growthPercentage >= 0 : true;

  return (
    <Card
      className="h-[324px]"
      title={
        <div className="flex items-center gap-2">
          <FaSwimmingPool className="!text-[20px] text-[#884EA7]" />
          <div className="font-semibold">Amenities</div>
        </div>
      }
      period={<div className="text-[12px] leading-[16px] text-[#64748B]">Today</div>}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <div className="text-[12px] leading-[16px] text-[#64748B]">
              Total Bookings
            </div>
            <div className="text-[28px] leading-[32px] font-medium text-[#8B5CF6]">
              {totalBookings}
            </div>
          </div>
{
    !allUnpaid &&

          <div>
            <div className="text-[12px] leading-[16px] text-[#64748B]">
              Revenue Generated
            </div>

            <div className="text-[28px] leading-[32px] font-medium text-[#329DFF]">
              ₹{amenitySummary?.todayPaidRevenue ?? "0.00"}
            </div>

            {growthPercentage !== null && (
              <div
                className={`inline-block mt-2 text-[10px] leading-[14px] px-2 py-1 rounded-full ${
                  isGrowthPositive
                    ? "text-[#1FA05B] bg-green-50"
                    : "text-red-600 bg-red-50"
                }`}
              >
                {growthPercentage}% from last month
              </div>
            )}
          </div>
}
        </div>

        <div className="space-y-5">
          {amenitiesList.length > 0 ? (
            amenitiesList.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <div className="text-[#64748B] text-[12px] leading-[16px]">
                    {item.name}
                  </div>

                  <div className="font-medium text-[12px] leading-[16px]">
                    <div className="text-[#64748B] inline">
                      {item.bookings} bookings
                    </div>

                    <div className="mx-2 text-[#121212] inline">
                      {item.revenue}
                    </div>
                  </div>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">
                  <div
                    className={`h-3 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-[120px]">
              <div className="text-[12px] text-[#94A3B8]">
                No amenity usage data available
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default Amenities;
