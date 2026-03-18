import React from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronDown,
} from "lucide-react";
import EmptyState from "../utils/EmptyState";

const DEFAULT_COLUMNS = [
  { key: "item", label: "Most Popular Item", align: "left" },
  { key: "orders", label: "Orders", align: "left" },
  { key: "revenue", label: "Revenue", align: "left" },
  { key: "aov", label: "AOV", align: "left" },
  { key: "revenueShare", label: "% Revenue", align: "center" },
];

const DEFAULT_DATA = [
  {
    item: "Coffee",
    orders: "34,908",
    revenue: "₹ 57,21,288",
    aov: "₹ 450",
    revenueShare: "43.6%",
  },
  {
    item: "Indian Paneer Combo",
    orders: "34,908",
    revenue: "₹57,21,288",
    aov: "₹ 750",
    revenueShare: "25%",
  },
  {
    item: "Filter Coffee",
    orders: "34,908",
    revenue: "₹3,94,805",
    aov: "₹ 450",
    revenueShare: "17.6%",
  },
  {
    item: "Special Thali",
    orders: "34,908",
    revenue: "₹3,94,805",
    aov: "₹ 350",
    revenueShare: "13.6%",
  },
  {
    item: "Veg Combo",
    orders: "34,908",
    revenue: "₹57,21,288",
    aov: "₹ 450",
    revenueShare: "0.6%",
  },
];

const DEFAULT_SUMMARY_ROW = {
  item: "-",
  orders: "1,64,905",
  revenue: "₹ 1,31,17,029",
  aov: "₹ 795",
  revenueShare: "100%",
};

const PAGE_OPTIONS = [10, 20, 30, 40, 50];

function getCellAlignment(align) {
  if (align === "center") return "text-center";
  if (align === "right") return "text-right";
  return "text-left";
}

function getPillStyles(value) {
  const numericValue = Number.parseFloat(String(value).replace("%", ""));

  if (!Number.isFinite(numericValue)) {
    return "bg-[#EDF4FB] text-[#2F80ED]";
  }

  if (numericValue >= 20) {
    return "bg-[#EEF9F1] text-[#36AB6C]";
  }

  return "bg-[#EDF4FB] text-[#3190FF]";
}

export default function CommercialTable({
  columns = DEFAULT_COLUMNS,
  data = DEFAULT_DATA,
  summaryRow = DEFAULT_SUMMARY_ROW,
  rowsPerPage = 10,
  setRowsPerPage = () => {},
  currentPage = 1,
  setCurrentPage = () => {},
  totalRows = 0,
  totalPages = 1,
  pageOptions = PAGE_OPTIONS,
}) {
  const safeColumns = Array.isArray(columns) && columns.length
    ? columns
    : DEFAULT_COLUMNS;
  const safeData = Array.isArray(data) ? data : [];
  const resolvedTotalRows = totalRows || safeData.length;
  const resolvedTotalPages =
    totalPages || Math.max(1, Math.ceil(resolvedTotalRows / rowsPerPage));
  const rangeStart = safeData.length ? (currentPage - 1) * rowsPerPage + 1 : 0;
  const rangeEnd = safeData.length ? rangeStart + safeData.length - 1 : 0;
  const shouldShowEmptyState = resolvedTotalRows === 0 && safeData.length === 0;

  return (
    <div className="flex h-[640px] w-full flex-col overflow-hidden rounded-[20px] border border-[#E7ECF3] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      {shouldShowEmptyState ? (
        <div className="flex flex-1 items-center justify-center">
          <EmptyState
            title="No Data Found"
            description="Catch up all the data. Change the date range to see the data."
          />
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-[#384E63] text-white">
                  {safeColumns.map((column, index) => (
                    <th
                      key={column.key || index}
                      className={`px-12 py-7 text-[16px] font-medium leading-[24px] ${getCellAlignment(column.align)} ${
                        index === 0 ? "rounded-tl-[20px]" : ""
                      } ${
                        index === safeColumns.length - 1 ? "rounded-tr-[20px]" : ""
                      }`}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {safeData.map((row, rowIndex) => (
                  <tr
                    key={row.id || rowIndex}
                    className="border-b border-[#F1F4F8] last:border-b-0"
                  >
                    {safeColumns.map((column, columnIndex) => {
                      const value = row?.[column.key];
                      const isPill = String(column.label).includes("%");

                      return (
                        <td
                          key={`${rowIndex}-${column.key || columnIndex}`}
                          className={`px-12 py-7 text-[17px] font-normal leading-[28px] text-[#202938] ${getCellAlignment(column.align)}`}
                        >
                          {isPill ? (
                            <span
                              className={`inline-flex min-w-[128px] items-center justify-center rounded-full px-6 py-3 text-[17px] font-medium leading-[26px] ${getPillStyles(value)}`}
                            >
                              {value ?? "-"}
                            </span>
                          ) : (
                            value ?? "-"
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>

              {summaryRow ? (
                <tfoot>
                  <tr className="border-t border-[#E9EEF4] bg-[#F6F9FD]">
                    {safeColumns.map((column, index) => (
                      <td
                        key={`summary-${column.key || index}`}
                        className={`px-12 py-7 text-[17px] font-semibold leading-[28px] text-[#39526C] ${getCellAlignment(column.align)}`}
                      >
                        {summaryRow?.[column.key] ?? "-"}
                      </td>
                    ))}
                  </tr>
                </tfoot>
              ) : null}
            </table>
          </div>

          <div className="mt-auto flex items-center justify-end gap-8 border-t border-[#EDF1F5] px-10 py-6 text-[#4E5662]">
            <div className="flex items-center gap-3 text-[17px] leading-[24px]">
              <span>Rows per page:</span>

              <div className="relative">
                <select
                  value={rowsPerPage}
                  onChange={(event) => {
                    setRowsPerPage(Number(event.target.value));
                    setCurrentPage(1);
                  }}
                  className="appearance-none bg-transparent pr-6 text-[17px] leading-[24px] outline-none"
                >
                  {pageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>

              <span>
                {rangeStart}-{rangeEnd} of {resolvedTotalRows}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[#202938]">
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="rounded-md p-1 disabled:opacity-30"
              >
                <ChevronsLeft className="h-7 w-7" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="rounded-md p-1 disabled:opacity-30"
              >
                <ChevronLeft className="h-7 w-7" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(resolvedTotalPages, prev + 1))
                }
                disabled={currentPage === resolvedTotalPages}
                className="rounded-md p-1 disabled:opacity-30"
              >
                <ChevronRight className="h-7 w-7" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage(resolvedTotalPages)}
                disabled={currentPage === resolvedTotalPages}
                className="rounded-md p-1 disabled:opacity-30"
              >
                <ChevronsRight className="h-7 w-7" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
