import React, { useState, useRef, useEffect } from "react";
import {
  CalendarTodayOutlined,
  FileDownloadOutlined,
  KeyboardArrowDown,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

function Header({ title, description, onExport }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Last 7 Days");
  const [showCustomCalendar, setShowCustomCalendar] = useState(false);
  const [customStartDate, setCustomStartDate] = useState(null);
  const [customEndDate, setCustomEndDate] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
  
  // Calendar navigation state
  const [leftMonth, setLeftMonth] = useState(new Date());
  const [rightMonth, setRightMonth] = useState(() => {
    const next = new Date();
    next.setMonth(next.getMonth() + 1);
    return next;
  });
  const [selectingStart, setSelectingStart] = useState(true);
  
  const dropdownRef = useRef(null);
  const exportDropdownRef = useRef(null);

  const dateRangeOptions = [
    // "Today",
    // "Yesterday",
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setShowCustomCalendar(false);
      }
      if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target)) {
        setIsExportDropdownOpen(false);
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

    if (range && dateRangeOptions.includes(range)) {
      setSelectedRange(range);
    }
    if (startDate && endDate) {
      setCustomStartDate(new Date(startDate));
      setCustomEndDate(new Date(endDate));
      setSelectedRange("Custom Range");
    }
  }, []);

  // Calculate date range based on selection
  const getDateRange = (option) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let startDate, endDate;

    switch (option) {
      case "Today":
        startDate = new Date(today);
        endDate = new Date(today);
        break;

      case "Yesterday":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 1);
        endDate = new Date(startDate);
        break;

      case "Last 7 Days":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 6);
        endDate = new Date(today);
        break;

      case "Last 30 Days":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 29);
        endDate = new Date(today);
        break;

      case "This Month":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today);
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

    if (range === "Custom Range" && startDate && endDate) {
      params.set(`${title.toLowerCase()}startdate`, startDate);
      params.set(`${title.toLowerCase()}enddate`, endDate);
    } else if (range !== "Custom Range") {
      const dates = getDateRange(range);
      if (dates) {
        params.set(`${title.toLowerCase()}startdate`, dates.startDate);
        params.set(`${title.toLowerCase()}enddate`, dates.endDate);
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
      setSelectingStart(true);
      setCustomStartDate(null);
      setCustomEndDate(null);
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
      const startStr = customStartDate.toISOString().split("T")[0];
      const endStr = customEndDate.toISOString().split("T")[0];
      updateURL("Custom Range", startStr, endStr);
    }
  };

  const handleCustomRangeCancel = () => {
    setShowCustomCalendar(false);
    setCustomStartDate(null);
    setCustomEndDate(null);
    setSelectingStart(true);
    if (selectedRange === "Custom Range") {
      setSelectedRange("Last 30 Days");
    }
  };

  const getDisplayText = () => {
    if (selectedRange === "Custom Range" && customStartDate && customEndDate) {
      const formatDate = (date) => {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
      };
      return `${formatDate(customStartDate)} - ${formatDate(customEndDate)}`;
    }
    return selectedRange;
  };

  const handleExportClick = async (format) => {
    setIsExporting(true);
    setIsExportDropdownOpen(false);

    try {
      const dateQuery = {};
      
      if (selectedRange === "Custom Range" && customStartDate && customEndDate) {
        dateQuery.startDate = customStartDate.toISOString().split("T")[0];
        dateQuery.endDate = customEndDate.toISOString().split("T")[0];
      } else {
        const dates = getDateRange(selectedRange);
        if (dates) {
          dateQuery.startDate = dates.startDate;
          dateQuery.endDate = dates.endDate;
        }
      }

      if (onExport) {
        await onExport({
          format,
          section: title,
          ...dateQuery,
        });
      }
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  // Calendar rendering functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const handleDateClick = (date) => {
    if (selectingStart) {
      setCustomStartDate(date);
      setCustomEndDate(null);
      setSelectingStart(false);
    } else {
      if (date < customStartDate) {
        setCustomStartDate(date);
        setCustomEndDate(null);
        setSelectingStart(false);
      } else {
        setCustomEndDate(date);
        setSelectingStart(true);
      }
    }
  };

  const isDateInRange = (date) => {
    if (!customStartDate || !customEndDate) return false;
    return date >= customStartDate && date <= customEndDate;
  };

  const isDateSelected = (date) => {
    if (!customStartDate) return false;
    if (customStartDate && date.getTime() === customStartDate.getTime()) return true;
    if (customEndDate && date.getTime() === customEndDate.getTime()) return true;
    return false;
  };

  const navigateMonth = (direction, panel) => {
    if (panel === 'left') {
      setLeftMonth(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() + direction);
        return newDate;
      });
    } else {
      setRightMonth(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() + direction);
        return newDate;
      });
    }
  };

  const handleMonthChange = (event, panel) => {
    const month = parseInt(event.target.value);
    if (panel === 'left') {
      setLeftMonth(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(month);
        return newDate;
      });
    } else {
      setRightMonth(prev => {
        const newDate = new Date(prev);
        newDate.setMonth(month);
        return newDate;
      });
    }
  };

  const handleYearChange = (event, panel) => {
    const year = parseInt(event.target.value);
    if (panel === 'left') {
      setLeftMonth(prev => {
        const newDate = new Date(prev);
        newDate.setFullYear(year);
        return newDate;
      });
    } else {
      setRightMonth(prev => {
        const newDate = new Date(prev);
        newDate.setFullYear(year);
        return newDate;
      });
    }
  };

  const renderCalendar = (panel) => {
    const displayMonth = panel === 'left' ? leftMonth : rightMonth;
    
    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(displayMonth);
    const monthNames = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    
    // Generate year options (current year - 100 to current year + 10)
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let y = currentYear - 100; y <= currentYear + 10; y++) {
      yearOptions.push(y);
    }
    
    const weeks = [];
    let days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-2"></div>);
    }
    
    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = isDateSelected(date);
      const isInRange = isDateInRange(date);
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          className={`
            text-center py-2 text-sm rounded-md transition-colors
            ${isToday ? 'font-bold' : ''}
            ${isSelected ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
            ${isInRange && !isSelected ? 'bg-blue-100 text-blue-900' : ''}
            ${!isSelected && !isInRange ? 'hover:bg-gray-100' : ''}
          `}
        >
          {day}
        </button>
      );
      
      if ((startingDayOfWeek + day) % 7 === 0 || day === daysInMonth) {
        weeks.push(
          <div key={`week-${weeks.length}`} className="grid grid-cols-7 gap-1">
            {days}
          </div>
        );
        days = [];
      }
    }
    
    return (
      <div className="p-4">
        <div className="flex items-center justify-between mb-4 gap-2">
          <button
            onClick={() => navigateMonth(-1, panel)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft style={{ fontSize: 20 }} />
          </button>
          
          <div className="flex gap-2 flex-1 justify-center">
            <select
              value={month}
              onChange={(e) => handleMonthChange(e, panel)}
              className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {monthNames.map((name, idx) => (
                <option key={idx} value={idx}>
                  {name}
                </option>
              ))}
            </select>
            
            <select
              value={year}
              onChange={(e) => handleYearChange(e, panel)}
              className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={() => navigateMonth(1, panel)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight style={{ fontSize: 20 }} />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="text-center text-xs font-medium text-gray-600 py-1">
              {day}
            </div>
          ))}
        </div>
        
        {weeks}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between px-6 my-6">
      <div>
        <div className="text-2xl text-gray-900 font-semibold">
          {title}
        </div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        {/* Date Range Dropdown */}
        <div className="relative w-full sm:w-auto" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white shadow-sm px-4 py-2.5 rounded border border-gray-200 text-gray-700 text-sm hover:bg-gray-50 transition-colors"
          >
            <CalendarTodayOutlined style={{ fontSize: 16 }} />
            <div className="whitespace-nowrap text-sm">
              {getDisplayText()}
            </div>
            <KeyboardArrowDown
              style={{ fontSize: 18 }}
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white shadow-xl rounded-lg border border-gray-200 z-50">
              {!showCustomCalendar ? (
                <div className="py-1 min-w-[200px]">
                  {dateRangeOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                        selectedRange === option
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="w-[640px]">
                  <div className="grid grid-cols-2 divide-x">
                    {renderCalendar('left')}
                    {renderCalendar('right')}
                  </div>
                  
                  <div className="border-t p-4 flex items-center justify-between bg-gray-50">
                    <div className="text-sm text-gray-600">
                      {customStartDate && customEndDate ? (
                        <span>
                          {customStartDate.toLocaleDateString()} - {customEndDate.toLocaleDateString()}
                        </span>
                      ) : customStartDate ? (
                        <span>Select end date</span>
                      ) : (
                        <span>Select start date</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleCustomRangeCancel}
                        className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleCustomRangeApply}
                        disabled={!customStartDate || !customEndDate}
                        className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Export Button with Dropdown */}
        <div className="relative w-full sm:w-auto" ref={exportDropdownRef}>
          <button
            onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
            disabled={isExporting}
            className="w-full flex items-center justify-center gap-2 bg-white text-purple-600 px-4 py-2.5 rounded border border-gray-200 shadow-sm hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="font-medium whitespace-nowrap text-sm">
              {isExporting ? "Exporting..." : "Export Report"}
            </div>
            <FileDownloadOutlined style={{ fontSize: 16 }} />
            <KeyboardArrowDown
              style={{ fontSize: 18 }}
              className={`transition-transform duration-200 ${
                isExportDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Export Dropdown Menu */}
          {isExportDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md border border-gray-200 z-50 min-w-[200px]">
              <div className="py-1">
                {exportOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleExportClick(option.value)}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors flex items-center gap-2"
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;