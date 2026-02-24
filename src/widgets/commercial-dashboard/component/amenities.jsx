import React from "react";
import Card from "../../components/Card";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { formatAmount } from "../../utils/index";
import { WavesLadder } from 'lucide-react';
function Amenities({ data }) {
  const amenitySummary = data?.amenitySummary || {};
  const chartData = Array.isArray(data?.chartData) ? data.chartData : [];

  const normalizedChartData = chartData.map((item) => ({
    ...item,
    isPaid: item?.isPaid == 1, 
  }));

  const allUnpaid =
    normalizedChartData.length > 0 &&
    normalizedChartData.every((item) => item?.isPaid === false);

  const totalBookings = amenitySummary?.totalBookings || 0;

  const totalForProgress = normalizedChartData.reduce((sum, item) => {
    const bookings = item?.isPaid
      ? item?.paid_bookings || item?.total_bookings || 0
      : item?.unpaid_bookings || item?.total_bookings || 0;

    return sum + bookings;
  }, 0);

  const amenitiesList = normalizedChartData.map((item) => {
    const bookings = item?.isPaid
      ? item?.paid_bookings || item?.total_bookings || 0
      : item?.unpaid_bookings || item?.total_bookings || 0;

   const revenue = item?.isPaid
  ? `₹ ${item?.paid_revenue || "0.00"}`
  : "";

    const percentage =
      totalForProgress > 0
        ? Math.round((bookings / totalForProgress) * 100)
        : 0;

    return {
      name: item?.facility_name || "Unknown",
      bookings,
      revenue,
      percentage,
      color: item?.isPaid ? "bg-violet-500" : "bg-slate-400",
      isPaid: item?.isPaid,
    };
  });

  const rawGrowth = amenitySummary?.growth_percentage;
  let growthPercentage = null;

  if (typeof rawGrowth === "number") {
    growthPercentage = rawGrowth;
  } else if (typeof rawGrowth === "string") {
    const cleaned = rawGrowth.replace("%", "").trim();
    const parsed = Number(cleaned);
    growthPercentage = isNaN(parsed) ? null : parsed;
  }

  const isGrowthPositive =
    growthPercentage !== null ? growthPercentage >= 0 : true;



  return (
    <Card
      className="h-[324px]"
      title="Amenities"
      period="Today"
      icon={<WavesLadder className="!text-[24px] text-[#8B5CF6]" />
}
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

          {!allUnpaid && (
            <div>
              <div className="text-[12px] leading-[16px] text-[#64748B]">
                Revenue Generated
              </div>

              <div className="text-[28px] leading-[32px] font-medium text-[#329DFF]">
                ₹ {amenitySummary?.todayPaidRevenue ?? "0.00"}
              </div>

              {growthPercentage !== null && (
                <div
                  className={`inline-flex items-center gap-1 mt-2 text-[10px] leading-[14px] px-2 py-1 rounded-full ${
                    isGrowthPositive
                      ? "text-[#1FA05B] bg-green-50"
                      : "text-red-600 bg-red-50"
                  }`}
                >
                  {isGrowthPositive ? <FaCaretUp /> : <FaCaretDown />}
                  {growthPercentage}%
                  <span>from last month</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-[16px]">
          {amenitiesList.length > 0 ? (
            amenitiesList.map((item, index) => (
              <div key={index} className="mb-[16px]">
                <div className="flex justify-between text-sm mb-2">
                  <div className="text-[#64748B] text-[12px] leading-[16px]">
                    {item?.name}
                  </div>

                  <div className="font-medium text-[12px] leading-[16px]">
                    <div className="text-[#64748B] inline">
                      {item?.bookings}{" "}
                      {item?.bookings <= 1 ? "booking" : "bookings"}
                    </div>

                    {item?.isPaid && (
                      <div className="mx-2 text-[#121212] inline">
                        {item?.revenue}
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-[11px] bg-gray-100 rounded-full">
                  <div
                    className={`h-[11px] rounded-full ${item?.color}`}
                    style={{ width: `${item?.percentage}%` }}
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
