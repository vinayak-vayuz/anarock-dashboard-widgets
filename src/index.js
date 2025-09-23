import styleInject from 'style-inject';
import css from './index.css?inline'; 

styleInject(css);

export { default as Card } from "./components/ui/Card";

export { default as Community } from "./widgets/overview/components/Community";
export { default as Engagement } from "./widgets/overview/components/Engagement";
export { default as Facilities } from "./widgets/overview/components/Facilities";
export { default as FinanceSummary } from "./widgets/overview/components/FinanceSummary";
export { default as GateUpdates } from "./widgets/overview/components/GateUpdates";
export { default as Helpdesk } from "./widgets/overview/components/Helpdesk";

export { default as UnitStatus } from "./widgets/community/component/UnitStatusPie";
export { default as OccupancyOverview } from "./widgets/community/component/OccupancyOverviewCard";
export { default as ResidentOverview } from "./widgets/community/component/ResidentOverviewCard";
export { default as BlockWiseOccupancy } from "./widgets/community/component/BlockWiseOccupancyCard";
export { default as MoveInOutTrends } from "./widgets/community/component/MoveInOutTrendsCard";

export { default as Accounting } from "./widgets/financials/component/AccountingCard";
export { default as Budgets } from "./widgets/financials/component/Budgets";
export { default as CashBankBalance } from "./widgets/financials/component/CashBankBalance";
export { default as DuesAgeing } from "./widgets/financials/component/DuesAgeing";
export { default as ExpenseCategories } from "./widgets/financials/component/ExpenseCategories";
export { default as IncomeExpenditure } from "./widgets/financials/component/IncomeExpenditure";

export { default as AssetValueBreakdown } from "./widgets/facilities/component/AssetValueBreakdown";
export { default as RevenuebyCategory } from "./widgets/facilities/component/RevenuebyCategory";
export { default as StatsGrid } from "./widgets/facilities/component/StatsGrid";

export { default as GuardPatrols } from "./widgets/gate-and-security/component/GuardPatrols";
export { default as HourlyTrafficFlow } from "./widgets/gate-and-security/component/HourlyTrafficFlow";
export { default as IncidentReports } from "./widgets/gate-and-security/component/IncidentReports";
export { default as StaffAttendance } from "./widgets/gate-and-security/component/StaffAttendance";
export { default as GateAndSecurityStatsGrid } from "./widgets/gate-and-security/component/StatsGrid";

export { default as Complaints } from "./widgets/helpdesk/component/Complaints";
export { default as ComplaintsByLevel } from "./widgets/helpdesk/component/ComplaintsbyLevel";
export { default as RequestBox } from "./widgets/helpdesk/component/RequestBox";
export { default as HelpdeskStatsGrid } from "./widgets/helpdesk/component/StatsGrid";

export { default as EventsUtilisation } from "./widgets/engagement/component/EventsUtilisation";
export { default as NoticeBoardStatus } from "./widgets/engagement/component/NoticeBoardStatus";
export { default as SingleStats } from "./widgets/engagement/component/SingleStats";
export { default as EngagementStatsGrid } from "./widgets/engagement/component/StatsGrid";