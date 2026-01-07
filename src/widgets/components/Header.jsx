import React, { useState, useRef, useEffect } from "react";
import {
  CalendarTodayOutlined,
  FileDownloadOutlined,
} from "@mui/icons-material";
import { FaChevronDown } from "react-icons/fa6";

/* ================== DATE UTILS ================== */
const startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
const endOfMonth = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0);
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);

const isSameDay = (a, b) =>
  a && b && a.toDateString() === b.toDateString();

const isBetween = (d, s, e) => s && e && d > s && d < e;

const toISO = (d) => d.toISOString().split("T")[0];

/* ================== CALENDAR ================== */
function Calendar({ monthDate, startDate, endDate, hoverDate, onSelect, onHover }) {
  const start = startOfMonth(monthDate);
  const end = endOfMonth(monthDate);
  const days = [];

  for (let i = 0; i < start.getDay(); i++) days.push(null);
  for (let d = 1; d <= end.getDate(); d++) {
    days.push(new Date(monthDate.getFullYear(), monthDate.getMonth(), d));
  }

  return (
    <div className="w-[260px]">
      <div className="text-center font-medium mb-2">
        {monthDate.toLocaleString("default", { month: "long", year: "numeric" })}
      </div>

      <div className="grid grid-cols-7 text-xs text-center text-gray-500 mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm">
        {days.map((date, i) =>
          date ? (
            <button
              key={i}
              onClick={() => onSelect(date)}
              onMouseEnter={() => onHover(date)}
              className={`h-8 rounded transition
                ${
                  isSameDay(date, startDate) || isSameDay(date, endDate)
                    ? "bg-purple-600 text-white"
                    : isBetween(date, startDate, hoverDate || endDate)
                    ? "bg-purple-100"
                    : "hover:bg-gray-100"
                }`}
            >
              {date.getDate()}
            </button>
          ) : (
            <div key={i} />
          )
        )}
      </div>
    </div>
  );
}

/* ================== HEADER ================== */
function Header({ title, description, onExport }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Last 7 Days");
  const [showCustomCalendar, setShowCustomCalendar] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [viewDate] = useState(new Date());

  const [isExporting, setIsExporting] = useState(false);

  const dropdownRef = useRef(null);
  const exportDropdownRef = useRef(null);

  /* ================== PRESETS ================== */
  const presets = [
    {
      label: "Today",
      range: () => {
        const d = new Date();
        return [d, d];
      },
    },
    {
      label: "Yesterday",
      range: () => {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        return [d, d];
      },
    },
    {
      label: "Last 7 Days",
      range: () => {
        const e = new Date();
        const s = new Date();
        s.setDate(e.getDate() - 7);
        return [s, e];
      },
    },
    {
      label: "Last 30 Days",
      range: () => {
        const e = new Date();
        const s = new Date();
        s.setDate(e.getDate() - 30);
        return [s, e];
      },
    },
    {
      label: "This Month",
      range: () => {
        const d = new Date();
        return [startOfMonth(d), endOfMonth(d)];
      },
    },
    {
      label: "Previous Month",
      range: () => {
        const d = addMonths(new Date(), -1);
        return [startOfMonth(d), endOfMonth(d)];
      },
    },
  ];

  /* ================== OUTSIDE CLICK ================== */
  useEffect(() => {
    const h = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
        setShowCustomCalendar(false);
      }
      if (exportDropdownRef.current && !exportDropdownRef.current.contains(e.target)) {
        setIsExportDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* ================== RANGE CLICK ================== */
  const handleDateSelect = (date) => {
    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  /* ================== URL UPDATE ================== */
  const updateURL = (s, e) => {
    const params = new URLSearchParams(window.location.search);
    params.set(`${title.toLowerCase()}startdate`, toISO(s));
    params.set(`${title.toLowerCase()}enddate`, toISO(e));
    window.history.pushState({}, "", `${window.location.pathname}?${params}`);
    window.dispatchEvent(new Event("dateRangeChange"));
  };

  const displayText =
    selectedRange === "Custom Range" && startDate && endDate
      ? `${toISO(startDate)} - ${toISO(endDate)}`
      : selectedRange;

  /* ================== JSX ================== */
  return (
    <div className="flex items-center justify-between px-6 my-6">
      <div>
        <div className="text-[24px] font-semibold">{title}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>

      <div className="flex gap-3">
        {/* DATE PICKER */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 bg-white shadow rounded text-sm"
          >
            <CalendarTodayOutlined fontSize="small" />
            {displayText}
            <FaChevronDown />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border shadow-xl rounded-md z-50 flex">
              {/* PRESETS */}
              <div className="w-[160px] border-r">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => {
                      const [s, e] = p.range();
                      setStartDate(s);
                      setEndDate(e);
                      setSelectedRange(p.label);
                      setIsDropdownOpen(false);
                      updateURL(s, e);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {p.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setSelectedRange("Custom Range");
                    setShowCustomCalendar(true);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 font-medium"
                >
                  Custom Range
                </button>
              </div>

              {/* CALENDAR */}
              {showCustomCalendar && (
                <div className="p-4 flex gap-6 relative">
                  <Calendar
                    monthDate={viewDate}
                    startDate={startDate}
                    endDate={endDate}
                    hoverDate={hoverDate}
                    onSelect={handleDateSelect}
                    onHover={setHoverDate}
                  />
                  <Calendar
                    monthDate={addMonths(viewDate, 1)}
                    startDate={startDate}
                    endDate={endDate}
                    hoverDate={hoverDate}
                    onSelect={handleDateSelect}
                    onHover={setHoverDate}
                  />

                  <div className="absolute bottom-0 left-0 right-0 border-t p-3 flex justify-between text-sm">
                    <span>
                      {startDate && endDate &&
                        `${toISO(startDate)} - ${toISO(endDate)}`}
                    </span>
                    <div className="flex gap-3">
                      <button onClick={() => setShowCustomCalendar(false)}>
                        Cancel
                      </button>
                      <button
                        disabled={!startDate || !endDate}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setShowCustomCalendar(false);
                          updateURL(startDate, endDate);
                        }}
                        className="bg-purple-600 text-white px-4 py-1 rounded disabled:opacity-40"
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

        {/* EXPORT */}
        <div className="relative" ref={exportDropdownRef}>
          <button
            disabled={isExporting}
            onClick={() => setIsExportDropdownOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 bg-white shadow rounded text-sm text-purple-600"
          >
            Export
            <FileDownloadOutlined fontSize="small" />
            <FaChevronDown />
          </button>

          {isExportDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border shadow rounded z-50">
              {["xlsx", "pdf"].map((f) => (
                <button
                  key={f}
                  onClick={() => onExport?.({ format: f })}
                  className="block px-4 py-2 text-sm hover:bg-purple-50"
                >
                  Export {f.toUpperCase()}
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