import Card from "../../../components/ui/Card";
import { LuWaves } from "react-icons/lu";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function GateUpdates({ isStatic, gate }) {
  // Dummy gate data for testing
  // const dummyGate = {
  //   summary: {
  //     activeWalkins: {
  //       visitor_in: 12,
  //       total_pass: 20,
  //     },
  //     preApprovedCheckins: {
  //       expected_pass_scanned: 8,
  //       total_expected_pass: 15,
  //     },
  //   },
  //   chart: [
  //     { hour: 8, walkins: 5, preApproved: 3 },
  //     { hour: 9, walkins: 8, preApproved: 5 },
  //     { hour: 10, walkins: 12, preApproved: 7 },
  //     { hour: 11, walkins: 15, preApproved: 9 },
  //     { hour: 12, walkins: 10, preApproved: 6 },
  //     { hour: 13, walkins: 6, preApproved: 4 },
  //     { hour: 14, walkins: 9, preApproved: 5 },
  //     { hour: 15, walkins: 14, preApproved: 10 },
  //     { hour: 16, walkins: 11, preApproved: 8 },
  //     { hour: 17, walkins: 7, preApproved: 5 },
  //   ],
  // };
  const gateData = gate || {};
  const COLORS = {
    green: "#12B981",
    red: "#EF4645",
    indigo: "#EBE4F9",
    purple: "#8B5CF6",
    amber: "#F69E0A",
    gamboge: "#E7A015",
    persimmon: "#E76215",
    blue: "#3b82f6",
    irishBlue: "#08B6D4",
    dodgerBlue: "#329DFF",
    slate: "#64748B",
  };

  const activeWalkins = gateData?.summary?.activeWalkins || {};
  const preApproved = gateData?.summary?.preApprovedCheckins || {};
  const chartData =
    gateData?.chart?.map((d) => ({
      time: `${d?.hour ?? 0}:00`,
      walkins: Number(d?.walkins ?? 0),
      checkins: Number(d?.preApproved ?? 0),
    })) ?? [];

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg">
        {label && <p className="font-medium mb-1">{label}</p>}
        {payload.map((item, i) => (
          <p key={i} className="capitalize leading-relaxed">
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: item.color,
                marginRight: 6,
              }}
            ></span>
            {item.name}: <span className="font-semibold">{item.value}</span>
          </p>
        ))}
      </div>
    );
  };

  return (
    <Card
      title="Gate Updates"
      period="Today"
      icon={<LuWaves className="text-2xl text-[#37CC6D]" />}
      className={`${isStatic ? "max-h-[303px]" : ""} mb-4 break-inside-avoid`}
    >
      <div className="flex flex-wrap gap-x-2 gap-y-2 text-sm mb-2 ">
        <div className="flex flex-col gap-2">
          <div className="!m-0 !text-[10px] !leading-[14px] !text-[#64748B]">
            Active Walk-ins
          </div>
          <div className="!m-0 !text-[28px] !leading-[32px] !font-medium text-[#1FA05B]">
            {activeWalkins.visitor_in ?? 0}
            <span className="!m-0 !text-[20px] !leading-[32px] !text-[#64748B]">
              /{activeWalkins.total_pass ?? 0}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="!m-0 !text-[10px] !leading-[14px] !text-[#64748B]">
            Pre-approved Check-ins
          </div>
          <div className="!m-0 text-[28px] leading-[32px] font-medium text-[#E7A015]">
            {preApproved.expected_pass_scanned ?? 0}
            <span className="text-[20px] leading-[32px] text-[#64748B]">
              /{preApproved.total_expected_pass ?? 0}
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="60%">
        <LineChart
          data={chartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="time"
            tick={{
              fontSize: 10,
              lineHeight: 14,
              fill: "#121212",
              fontWeight: 400,
            }}
          />
          <YAxis
            yAxisId="left"
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            tick={{
              fontSize: 10,
              lineHeight: 14,
              fill: "#64748B",
              fontWeight: 400,
            }}
            axisLine={false}
            tickLine={false}
            width={25}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />

          <RTooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="walkins"
            stroke={COLORS.green}
            strokeWidth={2}
            dot={false}
            name="Walk-ins"
          />
          <Line
            type="monotone"
            dataKey="checkins"
            stroke={COLORS.amber}
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="Pre-approved"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default GateUpdates;
