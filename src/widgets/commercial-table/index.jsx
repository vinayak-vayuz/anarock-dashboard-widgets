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
    { key: "c", label: "Closed" },
    { key: "d", label: "Open" },
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

  const calculatedTotalPages =
    rowsPerPage > 0 ? Math.ceil(safeData.length / rowsPerPage) : 1;

  const finalTotalPages = totalPages || calculatedTotalPages;

  const currentData = safeData;

  const shouldShowEmptyState = totalRows === 0 && safeData.length === 0;

  const gridTemplate = `repeat(${safeColumns.length}, 1fr)`;

  return (
    <div className="w-full bg-white rounded-[12px] h-[390px] !border-[0.5px] !border-[#EBEBEB] !shadow-[0_0_12px_0_#EAF2FF] overflow-hidden flex flex-col">
      {/* Table wrapper ensures header and body share the same column layout */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <div
          className="grid bg-[#354A5E] text-white text-[16px] leading-[20px] font-medium shrink-0"
          style={{ gridTemplateColumns: gridTemplate }}
        >
          {safeColumns.map((col, index) => (
            <div
              key={index}
              className="px-[24px] py-[16px] text-[16px] leading-[20px] whitespace-nowrap text-left"
            >
              {col.label}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {!shouldShowEmptyState ? (
            currentData.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid"
                style={{ gridTemplateColumns: gridTemplate }}
              >
                {safeColumns.map((col, colIndex) => {
                  const value = row[col.key];

                  const isClosedCol = col.label === "Closed";
                  const isOpenCol = col.label === "Open";
                  const isPercent =
                    typeof value === "string" && value.includes("%");
                  const percentClass =
                    value === "100%"
                      ? "bg-[#F0FEF2] text-[#36AB6C]"
                      : "bg-[#FFF0F0] text-[#AB0000]";

                  return (
                    <div
                      key={colIndex}
                      className={`px-[24px] py-[16px] flex items-center justify-start ${
                        colIndex === 0 ? "bg-white shadow-[0px_-2px_20px_0px_rgba(0,0,0,0.08)]" : "bg-white"
                      } text-[#121212]`}
                    >
                      {isClosedCol ? (
                        <div
                          className="text-[14px] font-medium"
                          style={{ color: "#36AB6C" }}
                        >
                          {value !== undefined && value !== null ? value : "-"}
                        </div>
                      ) : isOpenCol ? (
                        <div
                          className="text-[14px] font-medium"
                          style={{ color: "#AB0000" }}
                        >
                          {value !== undefined && value !== null ? value : "-"}
                        </div>
                      ) : isPercent ? (
                        <div
                          className={`inline-block px-[12px] py-[4px] rounded-full text-[14px] font-medium ${percentClass}`}
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
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center px-[24px] py-[16px] text-sm bg-white border-t border-[#F0F0F0] gap-[32px] shrink-0">
        <div className="flex items-center gap-[8px] text-gray-600 text-[14px]">
          <div>Rows per page:</div>

          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded px-[8px] py-[4px]"
          >
            {pageOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="ml-4 text-[14px]">
            {safeData?.length === 0 ? "0–0" : `1–${safeData?.length}`} of{" "}
            {totalRows || safeData?.length}
          </div>
        </div>

        <div className="flex items-center space-x-2 text-gray-600 text-[14px]">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-[8px] rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronsLeft size={18} />
          </button>

          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="p-[8px] rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === finalTotalPages}
            className="p-[8px] rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() => setCurrentPage(finalTotalPages)}
            disabled={currentPage === finalTotalPages}
            className="p-[8px] rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronsRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}