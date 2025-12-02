import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Tooltip,
  Checkbox,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";
import { CiExport } from "react-icons/ci";
import { updateSession } from "../utils";

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
  defaultValue = ["all"],
  onFilterChange = () => {},
  onExport = () => {},
}) {
  const storedValue =
    JSON.parse(sessionStorage.getItem("community_id")) || defaultValue;

  const [selected, setSelected] = useState(storedValue);

  const handleChange = (event) => {
    let value = event.target.value;

    // Handle "All" selection logic
    if (value.includes("all")) {
      value = ["all", ...options.map((o) => o.community_id)];
    }

    // If user deselects items and nothing remains, reset to "all"
    if (value.length === 0) {
      value = ["all"];
    }

    setSelected(value);

    updateSession("community_id", JSON.stringify(value));
    updateSession("widget_id", widgetId);

    onFilterChange(value);
  };

  const handleExport = () => {
    updateSession("widget_id", widgetId);
    updateSession("export", true);
    onExport();
  };

  return (
    <div className="flex items-center gap-2">
      <Tooltip slotProps={{ tooltip: { sx: { fontSize: "12px" } } }}>
        <FormControl size="small">
          <CustomSelect
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selectedValues) => {
              if (selectedValues.includes("all")) return "All";
              return options
                .filter((item) => selectedValues.includes(item.community_id))
                .map((item) => item.community_name)
                .join(", ");
            }}
          >
            <MenuItem value="all">
              <Checkbox checked={selected.includes("all")} />
              <ListItemText primary="All" sx={{ fontWeight: 600 }} />
            </MenuItem>

            {options?.map((item) => (
              <MenuItem key={item.community_id} value={item.community_id}>
                <Checkbox checked={selected.includes(item.community_id)} />
                <ListItemText primary={item.community_name} />
              </MenuItem>
            ))}
          </CustomSelect>
        </FormControl>
      </Tooltip>

      <Tooltip
        slotProps={{ tooltip: { sx: { fontSize: "12px" } } }}
        title="Export CSV for this widget"
      >
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
