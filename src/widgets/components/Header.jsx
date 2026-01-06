import React, { useState, useRef, useEffect } from "react";
import {
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  FileDownloadOutlined as FileDownloadOutlinedIcon,
} from "@mui/icons-material";
import { FaChevronDown } from "react-icons/fa6";

function Header({ title, description }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Last 7 Days");
  const [showCustomCalendar, setShowCustomCalendar] = useState(false);
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");
  const dropdownRef = useRef(null);

  const dateRangeOptions = [
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Previous Month",
    "Custom Range",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setShowCustomCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Read from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const range = params.get("dateRange");
    const startDate = params.get("startDate");
    const endDate = params.get("endDate");

    if (range) {
      setSelectedRange(range);
    }
    if (startDate && endDate) {
      setCustomStartDate(startDate);
      setCustomEndDate(endDate);
      setSelectedRange("Custom Range");
    }
  }, []);

  // Calculate date range based on selection
  const getDateRange = (option) => {
    const today = new Date();
    let startDate, endDate;

    switch (option) {
      case "Last 7 Days":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 7);
        endDate = today;
        break;

      case "Last 30 Days":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 30);
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
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
    };
  };

  // Update URL with date range
  const updateURL = (range, startDate = null, endDate = null) => {
    const params = new URLSearchParams(window.location.search);

    if (range === `Custom Range` && startDate && endDate) {
      // params.set(`${title.toLowerCase()}dateRange`, range);
      params.set(`${title.toLowerCase()}startDate`, startDate);
      params.set(`${title.toLowerCase()}endDate`, endDate);
    } else if (range !== "Custom Range") {
      const dates = getDateRange(range);
      if (dates) {
        // params.set(`${title}dateRange`, range);
        params.set(`${title.toLowerCase()}startDate`, dates.startDate);
        params.set(`${title.toLowerCase()}endDate`, dates.endDate);
      }
    }

    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newURL);

    // Trigger custom event for other components to listen
    window.dispatchEvent(new Event("dateRangeChange"));
  };

  const handleOptionSelect = (option) => {
    if (option === "Custom Range") {
      setShowCustomCalendar(true);
      setSelectedRange(option);
    } else {
      setSelectedRange(option);
      setIsDropdownOpen(false);
      setShowCustomCalendar(false);
      updateURL(option);
    }
  };

  const handleCustomRangeApply = () => {
    if (customStartDate && customEndDate) {
      setIsDropdownOpen(false);
      setShowCustomCalendar(false);
      updateURL("Custom Range", customStartDate, customEndDate);
    }
  };

  const getDisplayText = () => {
    if (selectedRange === "Custom Range" && customStartDate && customEndDate) {
      return `${customStartDate} to ${customEndDate}`;
    }
    return selectedRange;
  };

  return (
    <div className="flex items-center justify-between px-6 my-6">
      <div>
        <div className="!text-[24px] text-[#121212] font-semibold">
          {title}
        </div>
        <div className="text-gray-500 text-[14px]">{description}</div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px]">
        {/* Date Range Dropdown */}
        <div className="relative w-full sm:w-auto" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full sm:w-auto flex items-center justify-center gap-[8px] bg-white shadow-sm px-2 md:px-6 py-2.5 rounded-sm text-[#64748B] text-sm hover:bg-slate-50 transition-colors"
          >
            <CalendarTodayOutlinedIcon style={{ fontSize: 16 }} />
            <div className="whitespace-nowrap text-[14px]">
              {getDisplayText()}
            </div>
            <FaChevronDown
              fontSize={12}
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md border border-gray-200 z-50 min-w-[240px]">
              {!showCustomCalendar ? (
                <div className="py-1">
                  {dateRangeOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-gray-50 transition-colors ${
                        selectedRange === option
                          ? "bg-purple-50 text-[#884EA7] font-medium"
                          : "text-[#64748B]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4">
                  <div className="mb-3">
                    <label className="block text-[12px] text-[#64748B] mb-1.5 font-medium">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={customStartDate}
                      onChange={(e) => setCustomStartDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#884EA7] focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[12px] text-[#64748B] mb-1.5 font-medium">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={customEndDate}
                      onChange={(e) => setCustomEndDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#884EA7] focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setShowCustomCalendar(false);
                        setSelectedRange("Last 7 Days");
                      }}
                      className="flex-1 px-3 py-2 text-[14px] text-[#64748B] border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCustomRangeApply}
                      disabled={!customStartDate || !customEndDate}
                      className="flex-1 px-3 py-2 text-[14px] bg-[#884EA7] text-white rounded hover:bg-[#7a4596] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Export Button */}
        <button className="w-full flex items-center justify-center gap-[8px] bg-white text-[#884EA7] px-2 md:px-6 py-2.5 rounded-sm shadow-sm hover:bg-purple-50 transition-colors">
          <div className="font-medium whitespace-nowrap text-[14px]">
            Export Report
          </div>
          <FileDownloadOutlinedIcon style={{ fontSize: 16 }} />
        </button>
      </div>
    </div>
  );
}

export default Header;