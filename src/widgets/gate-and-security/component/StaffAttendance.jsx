import React from "react";
import Card from "../../components/CardNoLogo";

const DUMMY_PRESENT_ABSENT = [{ total_staff: 42, absent_staff: 6 }];
const DUMMY_BY_ROLE = [
  { staff_role_name: "Security Guard", total_staff: 18, present_staff: 16 },
  { staff_role_name: "Supervisor", total_staff: 8, present_staff: 7 },
  { staff_role_name: "Technician", total_staff: 10, present_staff: 9 },
];

function StaffAttendance({ staffPresentAbsent, staffPresentByRole }) {
  const resolvedPresentAbsent =
    Array.isArray(staffPresentAbsent) && staffPresentAbsent.length > 0
      ? staffPresentAbsent
      : DUMMY_PRESENT_ABSENT;
  const resolvedByRole =
    Array.isArray(staffPresentByRole) && staffPresentByRole.length > 0
      ? staffPresentByRole
      : DUMMY_BY_ROLE;

  const totalStaff = resolvedPresentAbsent?.[0]?.total_staff ?? 0;
  const absentStaff = resolvedPresentAbsent?.[0]?.absent_staff ?? 0;
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

        </div>

        {/* Staff Role List */}
        <div className="mt-4 space-y-2 overflow-y-auto max-h-[200px]">

          {resolvedByRole?.length ? (
            resolvedByRole?.map?.((item, index) => {

              const total = Number(item?.total_staff ?? 0);
              const present = Number(item?.present_staff ?? 0);
              const absent = (total ?? 0) - (present ?? 0);

              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#FAFBFD] rounded-md"
                >
                  <div className="text-[#121212] text-[14px] leading-[18px] font-medium">
                    {item?.staff_role_name ?? "-"}
                  </div>

                  <div className="text-[14px] leading-[20px] text-[#64748B]">
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
