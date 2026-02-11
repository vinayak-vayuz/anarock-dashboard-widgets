import React from "react";
import Card from "../../components/Card";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function FoodBeverages() {
  const totalOrders = 247;
  const revenueGenerated = "82K";
  const growthPercentage = 8; 
  const isGrowthPositive = growthPercentage >= 0;

  return (
    <Card
      className="h-[324px]"
       title="Food & Beverages (Static Data)"
           period="Today"
           icon={<RestaurantOutlinedIcon className="!text-[24px] text-[#FA7E28]" />}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <div className="text-[12px] leading-[16px] text-[#64748B]">
              Total Orders
            </div>
            <div className="text-[28px] leading-[32px] font-medium text-[#8B5CF6]">
              {totalOrders}
            </div>
          </div>

          <div>
            <div className="text-[12px] leading-[16px] text-[#64748B]">
              Revenue Generated
            </div>

            <div className="text-[28px] leading-[32px] font-medium text-[#329DFF]">
              ₹ {revenueGenerated}
            </div>

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
          </div>
        </div>

        <div className="mt-[16px]">
          <div className="mb-[16px]">
            <div className="flex justify-between text-sm mb-2">
              <div className="text-[#64748B] text-[12px] leading-[16px]">HP</div>

              <div className="font-medium text-[12px] leading-[16px] flex items-center">
                <div className="text-[#64748B] inline-block">120 orders</div>
                <div className="mx-2 text-[#121212] inline-block">₹ 45K</div>
              </div>
            </div>

            <div className="h-[11px] bg-gray-100 rounded-full">
              <div
                className="h-[11px] bg-blue-500 rounded-full"
                style={{ width: "70%" }}
              />
            </div>
          </div>

          <div className="mb-[16px]">
            <div className="flex justify-between text-sm mb-2">
              <div className="text-[#64748B] text-[12px] leading-[16px]">
                Adobe
              </div>

              <div className="font-medium text-[12px] leading-[16px] flex items-center">
                <div className="text-[#64748B] inline-block">85 orders</div>
                <div className="mx-2 text-[#121212] inline-block">₹ 23K</div>
              </div>
            </div>

            <div className="h-[11px] bg-gray-100 rounded-full">
              <div
                className="h-[11px] bg-red-500 rounded-full"
                style={{ width: "50%" }}
              />
            </div>
          </div>

          <div className="mb-[16px]">
            <div className="flex justify-between text-sm mb-2">
              <div className="text-[#64748B] text-[12px] leading-[16px]">
                Anarock
              </div>

              <div className="font-medium text-[12px] leading-[16px] flex items-center">
                <div className="text-[#64748B] inline-block">42 orders</div>
                <div className="mx-2 text-[#121212] inline-block">₹ 14K</div>
              </div>
            </div>

            <div className="h-[11px] bg-gray-100 rounded-full">
              <div
                className="h-[11px] bg-purple-700 rounded-full"
                style={{ width: "25%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FoodBeverages;
