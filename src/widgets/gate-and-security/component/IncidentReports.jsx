import React from "react";
import Card from "../../components/CardNoLogo";

const DUMMY_SUMMARY = {
  open: 4,
  in_progress: 7,
  closed: 12,
};

const DUMMY_DETAILS = [
  { incident_code: "INC-401", severity_level: "L1", severity: "Danger" },
  { incident_code: "INC-402", severity_level: "L2", severity: "High" },
  { incident_code: "INC-403", severity_level: "L3", severity: "Low" },
];

function IncidentReports({
  incidentReports = {},
  incidentReportsDetails = [],
}) {
  const resolvedIncidentReports =
    incidentReports && Object.keys(incidentReports).length > 0
      ? incidentReports
      : DUMMY_SUMMARY;
  const resolvedDetails =
    Array.isArray(incidentReportsDetails) && incidentReportsDetails.length > 0
      ? incidentReportsDetails
      : DUMMY_DETAILS;

  const open = Number(resolvedIncidentReports?.open ?? 0);
  const inProgress = Number(resolvedIncidentReports?.in_progress ?? 0);
  const closed = Number(resolvedIncidentReports?.closed ?? 0);

  return (
    <Card
      title="Incident Reports"
      className="h-[362px]"
      titleWeight="semi-bold"
    >
      <div>
        {/* Top Status Boxes */}
        <div className="flex w-full text-center gap-[24px]">
          <div className="flex-1 py-[12px] bg-[#FBF4F4] h-[76px] rounded">
            <div className="!text-[24px] leading-[28px] font-medium text-[#AB0000]">
              {open ?? 0}
            </div>
            <div className="!text-[12px] leading-[16px] text-[#AB0000]">
              Open
            </div>
          </div>

          <div className="flex-1 py-[12px] bg-[#FFFBF2] h-[76px] rounded">
            <div className="!text-[24px] leading-[28px] font-medium text-[#E7A015]">
              {inProgress ?? 0}
            </div>
            <div className="!text-[12px] leading-[16px] text-[#E7A015]">
              In-progress
            </div>
          </div>

          <div className="flex-1 py-[12px] bg-[#F7FEFA] h-[76px] rounded">
            <div className="!text-[24px] leading-[28px] font-medium text-[#1FA05B]">
              {closed ?? 0}
            </div>
            <div className="!text-[12px] leading-[16px] text-[#1FA05B]">
              Closed
            </div>
          </div>
        </div>

        {/* Incident List */}
        <div className="mt-4 space-y-2">
          {resolvedDetails?.length ? (
            resolvedDetails?.map?.((item, index) => {
              const severityColor =
                item?.severity === "Danger"
                  ? "text-[#AB0000]"
                  : item?.severity === "High"
                    ? "text-[#E7A015]"
                    : "text-[#1FA05B]";

              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-[12px] bg-[#FAFBFD] rounded-md"
                >
                  <div className="flex items-center gap-[8px]">
                    <div className="text-gray-700 font-medium">
                      {item?.incident_code ?? "-"}
                    </div>
                  </div>

                  <div
                    className={`!text-[12px] font-semibold flex items-center gap-[4px] ${severityColor}`}
                  >
                    <div>
                      {item?.severity_level ?? "-"} - {item?.severity ?? "-"}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-400 text-sm py-[24px]">
              No incidents found
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default IncidentReports;
