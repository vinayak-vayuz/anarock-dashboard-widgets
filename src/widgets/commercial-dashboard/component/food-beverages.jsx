import React from "react";
import Card from "../../components/Card";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { Utensils } from "lucide-react";
import { formatAmount } from "../../utils/index";

const DEFAULT_CURRENCY = "\u20B9";
const DEFAULT_OUTLET_COLORS = ["bg-blue-500", "bg-red-500", "bg-purple-700"];

const defaultData = {
  title: "Food & Beverages (Static Data)",
  period: "Today",
  summary: {
    totalOrders: 247,
    revenueGenerated: "82K",
    growthPercentage: 8,
    currencyType: DEFAULT_CURRENCY,
  },
  outlets: [
    {
      name: "HP",
      orders: 120,
      revenue: "45K",
      percentage: 70,
      color: "bg-[#3C81F6]",
    },
    {
      name: "Adobe",
      orders: 85,
      revenue: "23K",
      percentage: 50,
      color: "bg-[#3C81F6]",
    },
    {
      name: "Anarock",
      orders: 42,
      revenue: "14K",
      percentage: 25,
      color: "bg-[#3C81F6]",
    },
  ],
};

function parseGrowthValue(value, fallback = null) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value.replace("%", "").trim());
    return Number.isNaN(parsed) ? fallback : parsed;
  }

  return fallback;
}

function formatRevenueValue(value) {
  if (value === null || value === undefined || value === "") {
    return "0";
  }

  if (typeof value === "number") {
    return formatAmount(value);
  }

  const parsed = Number(value);
  return Number.isNaN(parsed) ? String(value) : formatAmount(parsed);
}

function normalizeFoodBeveragesData(data) {
  const source = data?.food_beverage_summary
    ? {
        title: data?.title,
        period: data?.period,
        summary: {
          totalOrders: data?.food_beverage_summary?.total_orders,
          revenueGenerated: data?.food_beverage_summary?.revenue_generated,
          growthPercentage:
            data?.food_beverage_summary?.growth_percentage ??
            data?.food_beverage_summary?.revenue_growth,
          currencyType: data?.food_beverage_summary?.currency_type,
        },
        outlets: data?.chart_data,
      }
    : data || {};

  const summary = source?.summary || {};
  const outlets = Array.isArray(source?.outlets) ? source.outlets : [];

  const normalizedOutlets = outlets.map((item, index) => ({
    name:
      item?.name ||
      item?.outlet_name ||
      item?.tenant_name ||
      item?.company_name ||
      "Unknown",
    orders: item?.orders ?? item?.total_orders ?? item?.count ?? 0,
    revenue:
      item?.revenue ?? item?.revenue_generated ?? item?.total_revenue ?? 0,
    percentage: item?.percentage,
    color:
      item?.color ||
      DEFAULT_OUTLET_COLORS[index % DEFAULT_OUTLET_COLORS.length],
  }));

  const totalOrders =
    summary?.totalOrders ?? summary?.orders ?? defaultData.summary.totalOrders;
  const totalRevenue =
    summary?.revenueGenerated ??
    summary?.revenue ??
    defaultData.summary.revenueGenerated;
  const growthPercentage = parseGrowthValue(
    summary?.growthPercentage ?? summary?.revenueGrowth,
    defaultData.summary.growthPercentage,
  );
  const currencyType =
    summary?.currencyType || summary?.currency || DEFAULT_CURRENCY;

  const totalOrdersForProgress = normalizedOutlets.reduce(
    (sum, item) => sum + (Number(item?.orders) || 0),
    0,
  );

  const normalizedOutletsWithPercentage = normalizedOutlets.map((item) => ({
    ...item,
    percentage:
      item?.percentage !== null && item?.percentage !== undefined
        ? Number(item.percentage) || 0
        : totalOrdersForProgress > 0
          ? Math.round(
              ((Number(item?.orders) || 0) / totalOrdersForProgress) * 100,
            )
          : 0,
  }));

  return {
    title: source?.title || defaultData.title,
    period: source?.period || defaultData.period,
    summary: {
      totalOrders,
      revenueGenerated: totalRevenue,
      growthPercentage,
      currencyType,
    },
    outlets:
      normalizedOutletsWithPercentage.length > 0
        ? normalizedOutletsWithPercentage
        : defaultData.outlets,
  };
}

function FoodBeverages({ data, title, period, icon }) {
  const normalizedData = normalizeFoodBeveragesData(data);
  const cardTitle = title || normalizedData.title;
  const cardPeriod = period || normalizedData.period;
  const cardIcon = icon || <Utensils className="!text-[24px] text-[#FA7E28]" />;

  const totalOrders = normalizedData.summary.totalOrders ?? 0;
  const revenueGenerated = formatRevenueValue(
    normalizedData.summary.revenueGenerated,
  );
  const growthPercentage = parseGrowthValue(
    normalizedData.summary.growthPercentage,
    0,
  );
  const isGrowthPositive = growthPercentage >= 0;

  return (
    <Card
      className="h-[324px]"
      title={cardTitle}
      period={cardPeriod}
      icon={cardIcon}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-[24px]">
          <div className="flex flex-col gap-[8px]!">
            <div className="text-[12px] leading-[16px] text-[#64748B]">
              Total Orders
            </div>
            <div className="text-[28px] leading-[32px] font-medium text-[#8B5CF6]">
              {totalOrders}
            </div>
          </div>

          <div className="flex flex-col gap-[8px]!">
            <div className="text-[12px] leading-[16px] text-[#64748B]">
              Revenue Generated
            </div>

            <div className="text-[28px] leading-[32px] font-medium text-[#329DFF]">
              {normalizedData.summary.currencyType} {revenueGenerated}
            </div>

            <div
              className={`w-fit inline-flex items-center gap-[4px] text-[10px] leading-[14px] p-[4px] rounded-[4px] ${
                isGrowthPositive
                  ? "text-[#1FA05B] bg-green-50"
                  : "text-red-600 bg-red-50"
              }`}
            >
              {isGrowthPositive ? <FaCaretUp /> : <FaCaretDown />}
              {growthPercentage}%<span>from last month</span>
            </div>
          </div>
        </div>

        <div className="mt-[16px]">
          {normalizedData.outlets.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={
                index === normalizedData.outlets.length - 1 ? "" : "mb-[16px]"
              }
            >
              <div className="flex justify-between text-sm mb-[8px]">
                <div className="text-[#64748B] text-[12px] leading-[16px]">
                  {item.name}
                </div>

                <div className="font-medium text-[12px] leading-[16px] flex items-center">
                  <div className="text-[#64748B] inline-block">
                    {item.orders} orders
                  </div>
                  <div className="mx-2 text-[#121212] inline-block">
                    {normalizedData.summary.currencyType}{" "}
                    {formatRevenueValue(item.revenue)}
                  </div>
                </div>
              </div>

              <div className="h-[11px] bg-gray-100 rounded-full">
                <div
                  className={`h-[11px] rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default FoodBeverages;
