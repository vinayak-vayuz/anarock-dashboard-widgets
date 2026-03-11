import NoticeBoardStatus from "./component/NoticeBoardStatus";
import EventsUtilisation from "./component/EventsUtilisation";
import StatCardGrid from "./component/StatsGrid";
import Header from "../components/Header";

function Engagement({ data = {}, onExport }) {
  return (
    <div>
      <Header
        title="Engagement"
        description="Insights on community activity"
        onExport={onExport}
      />
      <StatCardGrid data={data?.stats} />
      <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-6">
        <NoticeBoardStatus data={data?.noticeBoardStatus} />
        <EventsUtilisation data={data?.eventsUtilisation} />
      </div>
    </div>
  );
}

export default Engagement;
