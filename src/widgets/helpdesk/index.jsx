import Header from "../components/Header";
import StatCardGrid from "./component/StatsGrid";
import ComplaintsbyLevel from "./component/ComplaintsbyLevel";
import RequestBox from "./component/RequestBox";
import Complaints from "./component/Complaints";
function Financials() {
  const requests = [
    { title: "Maintenance", total: 25, pending: 8 },
    { title: "Security", total: 15, pending: 3 },
    { title: "Housekeeping", total: 12, pending: 4 },
    { title: "Utilities", total: 10, pending: 2 },
  ];

  const requestsBoxData = [
    {
      category_id: 2,
      category_name: "060422  RB APD",
      total: 0,
      pending: "0",
    },
    {
      category_id: 3,
      category_name: "Move In",
      total: 0,
      pending: "0",
    },
    {
      category_id: 4,
      category_name: "QA190723",
      total: 0,
      pending: "0",
    },
    {
      category_id: 5,
      category_name: "QA Test1",
      total: 0,
      pending: "0",
    },
  ];

  const complaints = [
    {
      level: "L1",
      open_count: "0",
      in_progress_count: "0",
      closed_count: "0",
      total: 0,
    },
    {
      level: "L2",
      open_count: "0",
      in_progress_count: "0",
      closed_count: "0",
      total: 0,
    },
    {
      level: "L3",
      open_count: "0",
      in_progress_count: "0",
      closed_count: "0",
      total: 0,
    },
  ];

  console.log(complaints);
  console.log("Pushing code");
  return (
    <div>
      <Header title="Helpdesk" description="Helpdesk request overview" />
      <StatCardGrid />
      <div className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-[24px] mt-6">
        <ComplaintsbyLevel data={complaints} />
        <RequestBox data={requestsBoxData}/>
        <Complaints data={requests} />
      </div>
    </div>
  );
}

export default Financials;
