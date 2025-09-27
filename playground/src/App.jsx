import "./App.css";
import {
  Header,
  Community,
  Engagement,
  Facilities,
  FinanceSummary,
  GateUpdates,
  Helpdesk,
  UnitStatus,
  OccupancyOverview,
  ResidentOverview,
  MoveInOutTrends,
  BlockWiseOccupancy,
  Accounting,
  Budgets,
  CashBankBalance,
  DuesAgeing,
  ExpenseCategories,
  IncomeExpenditure,
  AssetValueBreakdown,
  RevenuebyCategory,
  StatsGrid as FacilitiesStatsGrid,
  GuardPatrols,
  HourlyTrafficFlow,
  IncidentReports,
  StaffAttendance,
  GateAndSecurityStatsGrid,
  Complaints,
  ComplaintsByLevel,
  RequestBox,
  HelpdeskStatsGrid,
  EventsUtilisation,
  NoticeBoardStatus,
  SingleStats,
  EngagementStatsGrid,
} from "@anarock/widgets";

function App() {
  return (
    <>
      <div className="p-6">
        <div className="!columns-1 sm:!columns-2 xl:!columns-3 gap-4">
          <FinanceSummary isStatic={true} />
          <GateUpdates isStatic={true} />
          <Facilities isStatic={true} />
          <Community isStatic={true} />
          <Helpdesk isStatic={true} />
          <Engagement isStatic={true} />
        </div>
      </div>
      <div>
        <Header title="Facilities" description="Facility bookings overview" />
        <div className="!columns-1 sm:!columns-2 xl:!columns-3 gap-4">
          <FacilitiesStatsGrid isStatic={true} />
        </div>

        <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,3.5fr)] gap-6 mt-6">
          <AssetValueBreakdown isStatic={true} />
          <RevenuebyCategory isStatic={true} />
        </div>
      </div>
    </>
  );
}

export default App;
