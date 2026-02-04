import React from "react";
import Card from "../../components/Card";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";

function Amenities() {
    return (
        <Card
            className="h-[324px]"
            title={
                <div className="flex items-center gap-2">
                    <SpaOutlinedIcon className="text-purple-500" />
                    <span className="font-semibold">Amenities</span>
                </div>
            }
            period={<span className="text-sm text-gray-400">Today</span>}
        >
            <div className="flex flex-col h-full">
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <p className="text-[12px] leading-[16px] text-[#64748B]">Total Bookings</p>
                        <p className="text-[28px] leading-[32px] font-medium text-[#8B5CF6]">189</p>
                    </div>

                    <div>
                        <p className="text-[12px] leading-[16px] text-[#64748B]">Revenue Generated</p>
                        <p className="text-[28px] leading-[32px] font-medium text-[#329DFF]">₹ 166K</p>
                        <span className="inline-block mt-2 text-[10px] leading-[14px] text-[#1FA05B] bg-green-50 px-2 py-1 rounded-full">
                            +8% from last month
                        </span>
                    </div>
                </div>

                <div className="space-y-5">
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-[#64748B] text-[12px] leading-[16px]">Meeting Rooms</span>
                            <span className="font-medium text-[12px] leading-[16px]">
                                <span className="text-[#64748B]">
                                    95 bookings

                                </span>
                                <span className="mx-2 text-[#121212]">
                                    ₹ 98K
                                </span>
                            </span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full">
                            <div
                                className="h-3 bg-lime-500 rounded-full"
                                style={{ width: "75%" }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-[#64748B] text-[12px] leading-[16px]">Table Tennis</span>
                            <span className="font-medium text-[12px] leading-[16px]">
                                <span className="text-[#64748B]">
                                    62 bookings
                                </span>
                                <span className="mx-2 text-[#121212]">
                                    ₹ 36K
                                </span>
                            </span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full">
                            <div
                                className="h-3 bg-orange-500 rounded-full"
                                style={{ width: "55%" }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-[#64748B] text-[12px] leading-[16px]">Gym</span>
                            <span className="font-medium text-[12px] leading-[16px]">
                                <span className="text-[#64748B]">32 bookings</span>
                                <span className="mx-2 text-[#121212]">₹ 22K</span>
                            </span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full">
                            <div
                                className="h-3 bg-slate-600 rounded-full"
                                style={{ width: "25%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Amenities;
