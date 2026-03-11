import Header from "../components/Header";
import Stats from "./component/StatsGrid";
import GuardPatrols from "./component/GuardPatrols";
import HourlyTrafficFlow from "./component/HourlyTrafficFlow";
import IncidentReports from "./component/IncidentReports";
import StaffAttendance from "./component/StaffAttendance";
function GateandSecurity({ data = {}, onExport }) {
  return (
    <div>
      <Header
        title="Gate & Security"
        description="Security & access Control"
        onExport={onExport}
      />
      <Stats data={data?.stats} />

      <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,3.5fr)] gap-[24px] mt-6">
        <GuardPatrols data={data?.guardPatrols} />
        <HourlyTrafficFlow data={data?.hourlyTrafficFlow} />
      </div>
      <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-[24px] mt-6">
        <IncidentReports
          incidentReports={data?.incidentReports?.summary}
          incidentReportsDetails={data?.incidentReports?.details}
        />
        <StaffAttendance
          staffPresentAbsent={data?.staffAttendance?.staffPresentAbsent}
          staffPresentByRole={data?.staffAttendance?.staffPresentByRole}
        />
      </div>
    </div>
  );
}

export default GateandSecurity;
