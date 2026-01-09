import React, { useState, useRef, useEffect } from "react";
import {
  CalendarTodayOutlined,
  FileDownloadOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Header({ title, description, onExport }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Last 7 Days");
  const [customStartDate, setCustomStartDate] = useState(null);
  const [customEndDate, setCustomEndDate] = useState(null);
  const [showCustomCalendar, setShowCustomCalendar] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const dropdownRef = useRef(null);
  const exportDropdownRef = useRef(null);

  const dateRangeOptions = [
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Previous Month",
    "Custom Range",
  ];

  const exportOptions = [
    { label: "Export as Excel", value: "xlsx" },
    { label: "Export as PDF", value: "pdf" },
  ];

  /* ---------------- Outside click ---------------- */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
        setShowCustomCalendar(false);
      }
      if (
        exportDropdownRef.current &&
        !exportDropdownRef.current.contains(e.target)
      ) {
        setIsExportDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ---------------- Read URL on mount ---------------- */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const start = params.get(`${title.toLowerCase()}start_date`);
    const end = params.get(`${title.toLowerCase()}end_date`);

    if (start && end) {
      setCustomStartDate(new Date(start));
      setCustomEndDate(new Date(end));
      setSelectedRange("Custom Range");
    }
  }, [title]);

  /* ---------------- Date helpers ---------------- */
  const getDateRange = (option) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let startDate, endDate;

    switch (option) {
      case "Last 7 Days":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 6);
        endDate = today;
        break;

      case "Last 30 Days":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 29);
        endDate = today;
        break;

      case "This Month":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = today;
        break;

      case "Previous Month":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;

      default:
        return null;
    }

    return {
      start: startDate.toISOString().split("T")[0],
      end: endDate.toISOString().split("T")[0],
    };
  };

  const updateURL = (start, end) => {
    const params = new URLSearchParams(window.location.search);
    params.set(`${title.toLowerCase()}start_date`, start);
    params.set(`${title.toLowerCase()}end_date`, end);

    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
    window.dispatchEvent(new Event("dateRangeChange"));
  };

  /* ---------------- Handlers ---------------- */
  const handleOptionSelect = (option) => {
    if (option === "Custom Range") {
      setSelectedRange(option);
      setShowCustomCalendar(true);
      setCustomStartDate(null);
      setCustomEndDate(null);
      return;
    }

    const range = getDateRange(option);
    if (!range) return;

    setSelectedRange(option);
    setIsDropdownOpen(false);
    setShowCustomCalendar(false);
    updateURL(range.start, range.end);
  };

  const handleApply = () => {
    if (!customStartDate || !customEndDate) return;

    updateURL(
      customStartDate.toISOString().split("T")[0],
      customEndDate.toISOString().split("T")[0],
    );

    setIsDropdownOpen(false);
    setShowCustomCalendar(false);
  };

  const getDisplayText = () => {
    if (selectedRange === "Custom Range" && customStartDate && customEndDate) {
      return `${customStartDate.toLocaleDateString()} - ${customEndDate.toLocaleDateString()}`;
    }
    return selectedRange;
  };

  const handleExportClick = async (format) => {
    setIsExporting(true);
    setIsExportDropdownOpen(false);

    try {
      let start, end;

      if (selectedRange === "Custom Range") {
        start = customStartDate?.toISOString().split("T")[0];
        end = customEndDate?.toISOString().split("T")[0];
      } else {
        const range = getDateRange(selectedRange);
        start = range?.start;
        end = range?.end;
      }
      console.log(start,end);
      await onExport?.({ format, section: title, start, end });
    } finally {
      setIsExporting(false);
    }
  };

  /* ---------------- JSX ---------------- */
  return (
    <div className="flex items-center justify-between px-6 my-6">
      <div>
        <div className="text-[24px] font-semibold text-[#121212]">{title}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>

      <div className="flex gap-3">
        {/* Date Picker */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((v) => !v)}
            className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <CalendarTodayOutlined fontSize="small" className="text-gray-600" />
            {getDisplayText()}
            <KeyboardArrowDown className="text-gray-500" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
              {!showCustomCalendar ? (
                <div className="min-w-[200px] py-1">
                  {dateRangeOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOptionSelect(opt)}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${
                        selectedRange === opt
                          ? "bg-purple-50 text-purple-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 w-[360px]">
                  <DatePicker
                    inline
                    selectsRange
                    startDate={customStartDate}
                    endDate={customEndDate}
                    onChange={([start, end]) => {
                      setCustomStartDate(start);
                      setCustomEndDate(end);
                    }}
                    maxDate={new Date()}
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={40}
                  />

                  <div className="flex justify-between mt-4 gap-2">
                    <button
                      onClick={() => setShowCustomCalendar(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleApply}
                      disabled={!customStartDate || !customEndDate}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Export */}
        <div className="relative" ref={exportDropdownRef}>
          <button
            disabled={isExporting}
            onClick={() => setIsExportDropdownOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-600 text-white font-medium text-sm hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isExporting ? "Exporting..." : "Export Report"}
            <FileDownloadOutlined fontSize="small" />
          </button>

          {isExportDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[180px]">
              {exportOptions.map((o) => (
                <button
                  key={o.value}
                  onClick={() => handleExportClick(o.value)}
                  className="block px-4 py-2.5 text-sm hover:bg-purple-50 w-full text-left text-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {o.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
