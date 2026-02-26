import React from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

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
      color: "bg-green-100 text-green-600",
    },
    {
      a: "Uber",
      b: "Paneer Combo",
      c: "12,000",
      d: "₹ 12,00,000",
      e: "₹ 500",
      f: "25%",
      color: "bg-blue-100 text-blue-600",
    },
  ],
  rowsPerPage = 10,
  setRowsPerPage = () => {},
  currentPage = 1,
  setCurrentPage = () => {},
  pageOptions = [10, 20, 30, 40, 50],
}) {
  const safeData = Array.isArray(data) ? data : [];
  const safeColumns = Array.isArray(columns) ? columns : [];

  const totalPages =
    rowsPerPage > 0
      ? Math.ceil(safeData.length / rowsPerPage)
      : 1;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = safeData.slice(startIndex, endIndex);

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">

      {/* Header */}
      <div
        className="grid bg-slate-600 text-white text-sm font-medium"
        style={{ gridTemplateColumns: `repeat(${safeColumns.length}, 1fr)` }}
      >
        {safeColumns.map((col, index) => (
          <div key={index} className="px-6 py-4">
            {col.label}
          </div>
        ))}
      </div>

      {/* Rows */}
      {currentData.length > 0 ? (
        currentData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid text-sm text-gray-700 hover:bg-gray-50 transition"
            style={{
              gridTemplateColumns: `repeat(${safeColumns.length}, 1fr)`,
            }}
          >
            {safeColumns.map((col, colIndex) => (
              <div key={colIndex} className="px-6 py-4 bg-gray-50">
                {col.key === "f" ? (
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${row.color || ""
                      }`}
                  >
                    {row[col.key] || "-"}
                  </span>
                ) : (
                  row[col.key] || "-"
                )}
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="p-6 text-center text-gray-500">
          No Data Available
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-end items-center px-6 py-4 text-sm bg-white gap-8">

        <div className="flex items-center gap-2 text-gray-600">
          <span>Rows per page:</span>

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

          <span className="ml-4">
            {safeData.length === 0
              ? "0–0"
              : `${startIndex + 1}–${Math.min(
                  endIndex,
                  safeData.length
                )}`}{" "}
            of {safeData.length}
          </span>
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
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronsRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}