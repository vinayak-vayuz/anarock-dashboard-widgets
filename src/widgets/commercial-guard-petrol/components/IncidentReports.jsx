import React from "react";
import Card from "../../components/CardNoLogo";

function IncidentReports({ incidentReports, incidentReportsDetails }) {
  const open = Number(incidentReports?.open || 0);
  const inProgress = Number(incidentReports?.in_progress || 0);
  const closed = Number(incidentReports?.closed || 0);

  return (
    <Card
      title="Incident Reports"
      className="h-[362px]"
      titleWeight="semi-bold"
    >
      <div>
        {/* Top Status Boxes */}
        <div className="flex w-full text-center gap-[16px] mt-[24px]">
          <div className="flex-1 flex flex-col items-center justify-center bg-[#FBF4F4] h-[76px] rounded">
            <div className="text-[24px] leading-[28px] font-medium text-[#AB0000]">
              {open}
            </div>
            <div className="text-[12px] leading-[16px] text-[#AB0000]">
              Open
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center bg-[#FFFBF2] h-[76px] rounded">
            <div className="text-[24px] leading-[28px] font-medium text-[#F2A815]">
              {inProgress}
            </div>
            <div className="text-[12px] leading-[16px] text-[#F2A815]">
              In-progress
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center bg-[#F7FEFA] h-[76px] rounded">
            <div className="text-[24px] leading-[28px] font-medium text-[#1FA05B]">
              {closed}
            </div>
            <div className="text-[12px] leading-[16px] text-[#1FA05B]">
              Closed
            </div>
          </div>
        </div>

        {/* Incident List */}
        <div className="mt-4 space-y-2">
          {incidentReportsDetails?.length > 0 ? (
            incidentReportsDetails.map((item, index) => {
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
                      {item?.incident_code}
                    </div>
                  </div>

                  <div
                    className={`!text-[12px] font-semibold flex items-center gap-[4px] ${severityColor}`}
                  >
                    <div>
                      {item?.severity_level} - {item?.severity}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </Card>
  );
}

export default IncidentReports;
