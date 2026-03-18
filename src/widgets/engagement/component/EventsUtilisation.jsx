import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";
import Card from "../../components/Card";
import EmptyState from "../../utils/EmptyState";

const DEFAULT_EVENTS = [
  {
    title: "Holi Celebration",
    date: "25 Jun 2025",
    rsvp: "78/100",
    utilisation: 71,
    status: "Upcoming",
  },
  {
    title: "Maintenance Meeting",
    date: "25 Jun 2025",
    rsvp: "45/60",
    utilisation: 75,
    status: "Completed",
  },
];

function EventItem({ title, date, rsvp, utilisation, status }) {
  return (
    <div className=" bg-[#F8FAFC] h-[106px] px-[12px] mt-3">
      <div className="flex items-center justify-between">
        <div className="text-[16px] leading-[20px] font-semibold text-[#121212]">
          {title}
        </div>
        <div
          className={`!text-[12px] font-medium leading-[16px] px-[8px] py-[4px]  ${
            status === "Completed"
              ? "text-[#36AB6C] bg-[#E6F7EE]"
              : status === "Upcoming"
                ? "text-[#329DFF] bg-[#E6F2FF]"
                : "text-slate-500 bg-slate-100"
          }`}
        >
          {status}
        </div>
      </div>

      <div className="text-[14px] leading-[18px] text-[#64748B]">{date}</div>

      <div className="flex justify-between items-center mt-2">
        <div className="text-[14px] leading-[18px] text-[#64748B]">
          {rsvp} RSVP
        </div>
        <div className="text-[#3C82F6] text-[14px] leading-[18px] font-medium">
          {utilisation}% utilisation
        </div>
      </div>

      <div className="w-full bg-[#F8FAFC] h-[6px] rounded mt-2 mb-3">
        <div
          className="h-[6px] rounded bg-[#3C82F6]"
          style={{ width: `${utilisation}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function EventsUtilisation({ data }) {
  const events = Array.isArray(data) ? data : DEFAULT_EVENTS;

  return (
    <Card
      title="Events Utilisation"
      // period={
      //   <OpenInNewOutlinedIcon className="h-5 w-5 text-[#884EA7] cursor-pointer" />
      // }
      className="w-full h-[360px] overflow-hidden"
    >
      <div className="m-auto">
        {events?.length > 0 ? (
          events.map((event, index) => (
            <EventItem key={`${event.title}-${index}`} {...event} />
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <EmptyState />
          </div>
        )}
      </div>
    </Card>
  );
}
