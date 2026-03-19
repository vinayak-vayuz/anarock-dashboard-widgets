import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const CustomDropdown = ({ options = [], value, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // ✅ reference

  // ✅ outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative h-[32px]">
      {/* Selected Box */}
      <div
        className="flex items-center justify-between gap-[10px] px-[12px] py-[8px] border border-[#E2E8F0] rounded-[4px] cursor-pointer min-w-[140px]"
        onClick={() => setOpen(!open)}
      >
        <div className="text-[12px] leading-[16px] min-w-[109px] text-[#64748B]">
          {value}
        </div>
        <ChevronDown size={16} className="text-[#64748B]" />
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="absolute top-[110%] left-0 w-full bg-white border border-[#E2E8F0] rounded-[8px] shadow-md z-10">
          {options.map((item, index) => (
            <div
              key={index}
              className="px-[12px] py-[8px] text-[14px] text-[#334155] hover:bg-[#F1F5F9] cursor-pointer"
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;