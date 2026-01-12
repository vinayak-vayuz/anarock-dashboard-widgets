import * as Widgets from "../index";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="!text-[24px] font-bold mb-4">Playground</h1>
      <div className="h-[66px]">
        <Widgets.MainHeader />
      </div>

      <div className="!columns-1 sm:!columns-2 xl:!columns-3 gap-4">
        <Widgets.FinanceSummary isStatic={true} />
        <Widgets.GateUpdates isStatic={true} />
        <Widgets.Facilities isStatic={true} />
        <Widgets.Community isStatic={true} />
        <Widgets.Helpdesk isStatic={true} />
        <Widgets.Engagement isStatic={true} />
      </div>

      <div>
        <Widgets.Header
          title="Community"
          description="Units, residents, and occupancy details"
        />
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Widgets.UnitStatus isStatic={true} />
          <Widgets.OccupancyOverview isStatic={true} />
          <Widgets.ResidentOverview isStatic={true} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 px-5">
          <Widgets.BlockWiseOccupancy isStatic={true} />
          <Widgets.MoveInOutTrends isStatic={true} />
        </div>
      </div>

      <div>
        <Widgets.Header
          title="Financials"
          description="Units, residents, and occupancy details"
        />
        <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,1fr)] gap-6 mt-6">
          <Widgets.Accounting />
          <Widgets.ExpenseCategories />
        </div>

        <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,4fr)] gap-6 mt-6">
          <Widgets.CashBankBalance />
          <Widgets.DuesAgeing />
        </div>
        <div className="px-5 mt-6">
          <Widgets.Budgets />
        </div>
      </div>

      <div>
        <Widgets.Header
          title="Facilities"
          description="Facility bookings overview"
        />
        <Widgets.StatsGrid isStatic={true} />

        <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,3.5fr)] gap-6 mt-6">
          <Widgets.AssetValueBreakdown isStatic={true} />
          <Widgets.RevenuebyCategory isStatic={true} />
        </div>
      </div>

      <div>
        <Widgets.Header
          title="Gate & Security"
          description="Security & access Control"
        />
        <Widgets.StatsGrid />

        <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,3.5fr)] gap-6 mt-6">
          <Widgets.GuardPatrols />
          <Widgets.HourlyTrafficFlow />
        </div>
        <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Widgets.IncidentReports />
          <Widgets.StaffAttendance />
        </div>
      </div>

      <div>
        <Widgets.Header
          title="Helpdesk"
          description="Helpdesk request overview"
        />
        {/*const DUMMY_STAT_DATA = {
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
};*/}
        <Widgets.HelpdeskStatsGrid />
        {/*<Widgets.HelpdeskStatsGrid
          id="open_complaints"
          data={{
            current: 24,
            trend_percent: "-8%",
            direction: "bad",
          }}
        />
        <Widgets.HelpdeskStatsGrid
          id="pending_requests"
          data={{
            current: 24,
            trend_percent: "-8%",
            direction: "bad",
          }}
        />
        <Widgets.HelpdeskStatsGrid
          id="avg_response_time"
          data={{
            current: 24,
            trend_percent: "-8%",
            direction: "bad",
          }}
        />
        <Widgets.HelpdeskStatsGrid
          id="resolution_rate"
          data={{
            current: "89%",
            trend_percent: "+4%",
            direction: "good",
          }}
        />*/}
        {/*<Widgets.HelpdeskStatsGrid/>*/}
        {/*<Widgets.HelpdeskStatsGrid/>*/}
        {/*<Widgets.HelpdeskStatsGrid/>*/}
        <div className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Widgets.ComplaintsByLevel />
          <Widgets.RequestBox />
          <Widgets.Complaints />
        </div>
      </div>

      <div>
        <Widgets.Header
          title="Engagement"
          description="Insights on community activity"
        />
        <Widgets.StatsGrid isStatic={true} />
        <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Widgets.NoticeBoardStatus isStatic={true} />
          <Widgets.EventsUtilisation isStatic={true} />
        </div>
      </div>
    </div>
  );
}
