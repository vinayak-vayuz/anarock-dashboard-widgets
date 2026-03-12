import React from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import EmptyState from "../utils/EmptyState";

export default function CommercialTable({
  columns = [
    { key: "a", label: "Organisation" },
    { key: "b", label: "Item" },
    { key: "c", label: "Orders" },
    { key: "d", label: "Revenue" },
    { key: "e", label: "AOV" },
    { key: "f", label: "% Revenue" },
  ],
  data = [
    {
      a: "Google",
      b: "Coffee",
      c: "34,908",
      d: "₹ 57,21,288",
      e: "₹ 450",
      f: "43.6%",
    },
    {
      a: "Uber",
      b: "Paneer Combo",
      c: "12,000",
      d: "₹ 12,00,000",
      e: "₹ 500",
      f: "100%",
    },
  ],
  rowsPerPage = 10,
  setRowsPerPage = () => {},
  currentPage = 1,
  setCurrentPage = () => {},
  totalRows = 0,
  totalPages = 1,
  pageOptions = [10, 20, 30, 40, 50],
}) {
  const safeData = Array.isArray(data) ? data : [];
  const safeColumns = Array.isArray(columns) ? columns : [];

  /* fallback total pages if API does not provide */
  const calculatedTotalPages =
    rowsPerPage > 0 ? Math.ceil(safeData.length / rowsPerPage) : 1;

  const finalTotalPages = totalPages || calculatedTotalPages;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

const currentData = safeData;


console.log("safeData:", safeData);
console.log("currentData:", currentData);
  return (
    <div className="w-full bg-white rounded-xl h-[390px] shadow-md overflow-hidden flex flex-col">

      {/* Header */}
      <div
        className="grid bg-slate-600 text-white text-sm font-medium"
        style={{ gridTemplateColumns: `repeat(${safeColumns.length}, 1fr)` }}
      >
        {safeColumns.map((col, index) => (
          <div key={index} className="px-6 py-4 text-[16px] leading-[20px]">
            {col.label}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="flex-1 overflow-y-auto">
        {currentData.length > 0 ? (
          currentData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid text-[14px] leading-[18px] text-gray-700 hover:bg-gray-50 transition"
              style={{
                gridTemplateColumns: `repeat(${safeColumns.length}, 1fr)`,
              }}
            >
              {safeColumns.map((col, colIndex) => {
                const value = row[col.key];

                const isPercent =
                  typeof value === "string" && value.includes("%");

                const percentClass =
                  value === "100%"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600";

                return (
                  <div key={colIndex} className="px-6 py-4 bg-gray-50">
                    {isPercent ? (
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-[14px]  font-semibold ${percentClass}`}
                      >
                        {value}
                      </div>
                    ) : (
                      <div>
                        {value !== undefined && value !== null ? value : "-"}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <EmptyState
            title="No Data Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center px-6 py-4 text-sm bg-white gap-8">

        <div className="flex items-center gap-2 text-gray-600">
          <div>Rows per page:</div>

          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded px-2 py-1"
          >
            {pageOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

         <div className="ml-4">
  {safeData?.length === 0
    ? "0–0"
    : `1–${safeData?.length}`}{" "}
  of {totalRows || safeData?.length}
</div>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronsLeft size={18} />
          </button>

          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === finalTotalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() => setCurrentPage(finalTotalPages)}
            disabled={currentPage === finalTotalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronsRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}