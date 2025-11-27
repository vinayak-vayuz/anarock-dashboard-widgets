import { useState } from "react";
import { FormControl, MenuItem, Select, Tooltip } from "@mui/material";
import styled from "@emotion/styled";
import { CiExport } from "react-icons/ci";

const CustomSelect = styled(Select)(() => ({
  width: "fit-content",
  maxWidth: "100px",
  height: "28px",
  padding: "0 6px",
  display: "flex",
  fontSize: "12px",
  alignItems: "center",
  "& .MuiSelect-select": { padding: 0 },
  // Normal border
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#C6C6C6",
    transition: "all 0.2s ease",
  },

  // Hover state
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#B084CC",
  },

  // Focus state (main customization)
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#884EA7 !important",
    boxShadow: "0 0 0 3px rgba(136, 78, 167, 0.2)",
  },
}));

export function ActionButtons({
  widgetId,
  options = [],
  defaultValue = "all",
  onFilterChange = () => {},
  onExport = () => {},
}) {
  const storedValue = sessionStorage.getItem(`${widgetId}_community_id`);

  const [selected, setSelected] = useState(storedValue || defaultValue);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);

    if (value === "all") {
      sessionStorage.removeItem(`${widgetId}_community_id`);
    } else {
      sessionStorage.setItem(`${widgetId}_community_id`, value);
    }

    onFilterChange(value, widgetId);
  };

  const handleExport = () => {
    sessionStorage.setItem(`${widgetId}_export`, "true");
    onExport(widgetId);
  };

  console.log(options, "options in action button");

  return (
    <div className="flex items-center gap-2">
      <Tooltip title="Select a community">
        <FormControl size="small">
          <CustomSelect value={selected} onChange={handleChange}>
            <MenuItem value="all" sx={{ fontWeight: 600 }}>
              All
            </MenuItem>

            {options?.map((item) => (
              <MenuItem key={item.community_id} value={item.community_id}>
                {item.community_name}
              </MenuItem>
            ))}
          </CustomSelect>
        </FormControl>
      </Tooltip>

      <Tooltip title="Export CSV for this widget">
        <button
          onClick={handleExport}
          className="px-3 py-2 bg-[#FBF5FF] rounded cursor-pointer"
        >
          <CiExport className="stroke-[#884EA7] stroke-[1.4]" />
        </button>
      </Tooltip>
    </div>
  );
}
