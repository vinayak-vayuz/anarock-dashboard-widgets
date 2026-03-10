import React from "react";

function EmptyState({
  image = "https://cdni.iconscout.com/illustration/premium/thumb/businessman-sad-for-no-data-in-folder-illustration-svg-download-png-10155562.png",
  title = "No Data Available",
  description = "Catch up all the data. Change the date range to see the data.",
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <img
        src={image}
        alt="no data"
        className="w-32 h-32 mb-4 opacity-80"
      />

      <h3 className="text-[16px] font-semibold text-gray-900 mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-500 max-w-[260px]">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;