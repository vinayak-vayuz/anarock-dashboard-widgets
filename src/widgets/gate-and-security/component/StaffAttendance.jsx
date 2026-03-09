import React from "react";
import Card from "../../components/CardNoLogo";

function StaffAttendance({ staffPresentAbsent, staffPresentByRole }) {

  const totalStaff = staffPresentAbsent?.[0]?.total_staff ?? 0;
  const absentStaff = staffPresentAbsent?.[0]?.absent_staff ?? 0;
  const presentStaff = (totalStaff ?? 0) - (absentStaff ?? 0);

  return (
    <Card
      title="Staff Attendance"
      className="h-[362px]"
      titleWeight="semi-bold"
    >
      <div>

        {/* Top Attendance Summary */}
        <div className="flex gap-[24px] text-center">

          <div className="flex-1 py-3 bg-[#F7FEFA] rounded h-[76px]">
            <div className="text-[24px] font-medium text-[#1FA05B]">
              {presentStaff ?? 0}
            </div>
            <div className="text-[12px] text-[#1FA05B]">
              Present
            </div>
          </div>

          <div className="flex-1 py-3 bg-[#FBF4F4] rounded h-[76px]">
            <div className="text-[24px] font-medium text-[#AB0000]">
              {absentStaff ?? 0}
            </div>
            <div className="text-[12px] text-[#AB0000]">
              Absent
            </div>
          </div>

          <div className="flex-1 py-3 bg-[#F1F5F9] rounded h-[76px]">
            <div className="text-[24px] font-medium text-[#334155]">
              {totalStaff ?? 0}
            </div>
            <div className="text-[12px] text-[#334155]">
              Total
            </div>
          </div>

        </div>

        {/* Staff Role List */}
        <div className="mt-4 space-y-2 overflow-y-auto max-h-[200px]">

          {staffPresentByRole?.length ? (
            staffPresentByRole?.map?.((item, index) => {

              const total = Number(item?.total_staff ?? 0);
              const present = Number(item?.present_staff ?? 0);
              const absent = (total ?? 0) - (present ?? 0);

              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#FAFBFD] rounded-md"
                >
                  <div className="text-gray-700 text-sm font-medium">
                    {item?.staff_role_name ?? "-"}
                  </div>

                  <div className="text-[12px] text-gray-600">
                    {(present ?? 0)}/{(total ?? 0)}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-[16px] text-gray-400 text-sm py-6">
              No staff data
            </div>
          )}

        </div>

      </div>
    </Card>
  );
}

export default StaffAttendance;