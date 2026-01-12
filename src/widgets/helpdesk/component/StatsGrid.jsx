import React from "react";
import { DescriptionOutlined as DescriptionOutlinedIcon } from "@mui/icons-material";
import Card from "../../components/Card";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegClock, FaArrowTrendUp } from "react-icons/fa6";
import { LuTicketCheck } from "react-icons/lu";
import { Chip } from "../../components/Chip";

/**
 * Supported stat ids:
 * - open_complaints
 * - pending_requests
 * - avg_response_time
 * - resolution_rate
 */

const STAT_IDS = [
  "open_complaints",
  "pending_requests",
  "avg_response_time",
  "resolution_rate",
];

const STAT_CONFIG = {
  open_complaints: {
    title: "Open Complaints",
    Icon: LuTicketCheck,
    iconColor: "#AB0000",
    deltaLabel: "Compared to last month",
  },
  pending_requests: {
    title: "Pending Requests",
    Icon: IoDocumentTextOutline,
    iconColor: "#E7A015",
    deltaLabel: "Compared to last month",
  },
  avg_response_time: {
    title: "Avg Response Time",
    Icon: FaRegClock,
    iconColor: "#1FA05B",
    deltaLabel: "Compared to last month",
  },
  resolution_rate: {
    title: "Resolution Rate",
    Icon: FaArrowTrendUp,
    iconColor: "#329DFF",
    deltaLabel: "Compared to last month",
  },
};

export const StatText = ({
  children,
  size = 28,
  lineHeight = 32,
  weight = 500,
  color = "#121212",
}) => {
  return (
    <div
      style={{
        // fontFamily: "Geist",
        fontWeight: weight,
        fontSize: `${size}px`,
        lineHeight: `${lineHeight}px`,
        color,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {children}
    </div>
  );
};

export const STAT_TEXT_PRESETS = {
  primary: {
    size: 28,
    lineHeight: 32,
    weight: 500,
  },
  secondary: {
    size: 20,
    lineHeight: 24,
    weight: 500,
  },
  compact: {
    size: 16,
    lineHeight: 20,
    weight: 400,
  },
};

const DUMMY_STAT_DATA = {
  open_complaints: {
    current: 24,
    trend_percent: "-8%",
    direction: "bad",
  },
  pending_requests: {
    current: 17,
    trend_percent: "-5%",
    direction: "bad",
  },
  avg_response_time: {
    current: "2.4 h",
    trend_percent: "+6%",
    direction: "good",
  },
  resolution_rate: {
    current: "89%",
    trend_percent: "+4%",
    direction: "good",
  },
};

function StatCard({ id, data }) {
  /**
   * 🟢 If real API data exists for THIS id → render ONE card
   */
  if (id && data && !data[id] && data.current !== undefined) {
    return <SingleStatCard id={id} data={data} />;
  }

  /**
   * 🟡 No API data → render ALL 4 dummy cards
   */
  return (
    <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {STAT_IDS.map((statId) => (
        <SingleStatCard key={statId} id={statId} />
      ))}
    </div>
  );
}

/**
 * Internal single-card renderer
 * (not exported, no new file)
 */
function SingleStatCard({ id, data }) {
  const config = STAT_CONFIG[id];
  if (!config) return null;

  const formatValue = (id, value) => {
    if (value === null || value === undefined) return "—";

    // Avg response time → add "hr"
    if (id === "avg_response_time") {
      // If API already sent "hr", don't double it
      return typeof value === "number" ? `${value} h` : value;
    }

    // Resolution rate → add "%"
    if (id === "resolution_rate") {
      return typeof value === "number" ? `${value}%` : value;
    }

    return value;
  };

  const {
    title,
    Icon = DescriptionOutlinedIcon,
    iconColor,
    deltaLabel,
  } = config;

  const statData =
    data && Object.keys(data).length > 0 ? data : DUMMY_STAT_DATA[id];

  const value = formatValue(id, statData?.current);

  const delta = statData?.trend_percent ?? "—";
  const positive =
    statData?.direction === "good" || statData?.direction === "neutral";

  return (
    <Card
      title={title}
      titleColor={iconColor}
      icon={
        <div className="h-6 w-6 flex items-center justify-center">
          <Icon className="h-6 w-6" style={{ color: iconColor }} />
        </div>
      }
      // className="!gap[16px]"
    >
      <StatText {...STAT_TEXT_PRESETS.primary}>{value}</StatText>

      {/*<div className="flex items-center gap-[8px] text-[14px] mt-2">
        <div
          className={
            positive
              ? "text-emerald-600 font-medium"
              : "text-rose-600 font-medium"
          }
        >
          {delta}
        </div>
        <div className="text-slate-500">{deltaLabel}</div>
      </div>*/}
      <div className="flex items-center gap-[8px] text-[14px] mt-2">
        <Chip value={delta} />
        <div className="text-slate-500">{deltaLabel}</div>
      </div>
    </Card>
  );
}

export default StatCard;
