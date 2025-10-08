import Header from "../components/Header";
import StatCardGrid from "./component/StatsGrid";
import ComplaintsbyLevel from "./component/ComplaintsbyLevel";
import RequestBox from "./component/RequestBox";
import Complaints from "./component/Complaints";
function Financials() {
  return (
    <div>
      <Header title="Helpdesk" description="Helpdesk request overview" />
      <StatCardGrid />
      <div className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-[24px] mt-6">
        <ComplaintsbyLevel />
        <RequestBox />
        <Complaints />
      </div>
    </div>
  );
}

export default Financials;
