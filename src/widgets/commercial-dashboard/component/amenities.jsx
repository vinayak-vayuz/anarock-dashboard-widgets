import React from "react";
import Card from "../../components/Card";
import { FaSwimmingPool } from "react-icons/fa";

function Amenities({ data }) {
    const { amenitySummary, chartData } = data || {};

    const amenitiesList = Array.isArray(chartData) ? chartData : [];

    return (
        <Card
            className="h-[324px]"
            title={
                <div className="flex items-center gap-2">
                    <FaSwimmingPool className="!text-[20px] text-[#884EA7]" />
                    <span className="font-semibold">Amenities</span>
                </div>
            }
            period={
                <span className="text-[12px] leading-[16px] text-[#64748B]">
                    Today
                </span>
            }
        >
            <div className="flex flex-col h-full">
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <p className="text-[12px] leading-[16px] text-[#64748B]">
                            Total Bookings
                        </p>
                        <p className="text-[28px] leading-[32px] font-medium text-[#8B5CF6]">
                            {amenitySummary?.totalBookings ?? 0}
                        </p>
                    </div>

                    <div>
                        <p className="text-[12px] leading-[16px] text-[#64748B]">
                            Revenue Generated
                        </p>
                        <p className="text-[28px] leading-[32px] font-medium text-[#329DFF]">
                            {amenitySummary?.revenueGenerated ?? "₹0.0"}
                        </p>

                        {amenitySummary?.growth && (
                            <span
                                className={`inline-block mt-2 text-[10px] leading-[14px] px-2 py-1 rounded-full
                                ${
                                    amenitySummary.growth.isPositive
                                        ? "text-[#1FA05B] bg-green-50"
                                        : "text-red-600 bg-red-50"
                                }`}
                            >
                                {amenitySummary.growth.percentage}{" "}
                                {amenitySummary.growth.label}
                            </span>
                        )}
                    </div>
                </div>

                <div className="space-y-5">
                    {amenitiesList.length > 0 ? (
                        amenitiesList.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-[#64748B] text-[12px] leading-[16px]">
                                        {item.name}
                                    </span>
                                    <span className="font-medium text-[12px] leading-[16px]">
                                        <span className="text-[#64748B]">
                                            {item.bookings} bookings
                                        </span>
                                        <span className="mx-2 text-[#121212]">
                                            {item.revenue}
                                        </span>
                                    </span>
                                </div>

                                <div className="h-3 bg-gray-100 rounded-full">
                                    <div
                                        className={`h-3 rounded-full ${
                                            item.color || "bg-slate-400"
                                        }`}
                                        style={{
                                            width: `${item.percentage || 0}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-[120px]">
                            <p className="text-[12px] text-[#94A3B8]">
                                No amenity usage data available
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}

export default Amenities;
