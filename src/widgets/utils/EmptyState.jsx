import React from "react";

function EmptyState({
  image = "https://cdni.iconscout.com/illustration/premium/thumb/businessman-sad-for-no-data-in-folder-illustration-svg-download-png-10155562.png",
  title = "No Data Available",
  description = "Catch up all the data. Change the date range to see the data.",
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-[16px]">
      <img src={image} alt="no data" className="w-32 h-32 mb-4 opacity-80" />

      <div className="text-[16px] font-semibold text-gray-900 mb-[4px]">
        {title}
      </div>

      <div className="text-[12px] text-gray-500 max-w-[260px]">
        {description}
      </div>
    </div>
  );
}

export default EmptyState;
