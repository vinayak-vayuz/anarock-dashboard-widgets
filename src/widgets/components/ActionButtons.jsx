import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Tooltip,
  Checkbox,
  ListItemText,
  TextField,
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
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((item) =>
    item.community_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (event) => {
    let value = event.target.value;

    // Check if "all" was clicked
    if (value.includes("all")) {
      // If "all" is now selected, select everything
      const allIds = options.map((item) => item.community_id);
      setSelected(["all", ...allIds]);

      // Store all community IDs in session storage
      updateSession("community_id", JSON.stringify(allIds));
      updateSession("widget_id", widgetId);

      onFilterChange(allIds);
    } else {
      // Remove "all" from the selection if it was there
      value = value.filter((v) => v !== "all");

      // If nothing is selected, reset to "all"
      if (value.length === 0) {
        const allIds = options.map((item) => item.community_id);
        setSelected(["all", ...allIds]);
        updateSession("community_id", JSON.stringify(allIds));
        updateSession("widget_id", widgetId);
        onFilterChange(allIds);
      } else {
        // Check if all items are selected (without "all" being clicked)
        const allIds = options.map((item) => item.community_id);
        const allSelected = allIds.every((id) => value.includes(id));

        if (allSelected) {
          setSelected(["all", ...allIds]);
        } else {
          setSelected(value);
        }

        updateSession("community_id", JSON.stringify(value));
        updateSession("widget_id", widgetId);
        onFilterChange(value);
      }
    }
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
            renderValue={(values) => {
              if (values.includes("all")) return "All";
              return options
                .filter((item) => values.includes(item.community_id))
                .map((item) => item.community_name)
                .join(", ");
            }}
            MenuProps={{
              PaperProps: { style: { maxHeight: 300 } },
              autoFocus: false,
            }}
          >
            {/* Search Box */}
            <MenuItem
              onKeyDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
              disableRipple
              sx={{
                "&:hover": { backgroundColor: "transparent" },
                cursor: "default",
              }}
            >
              <TextField
                placeholder="Search..."
                size="small"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                sx={{ width: "100%" }}
                autoFocus
              />
            </MenuItem>

            {/* "All" Option */}
            <MenuItem value="all">
              <Checkbox checked={selected.includes("all")} />
              <ListItemText primary="All" sx={{ fontWeight: 600 }} />
            </MenuItem>

            {/* Filtered List */}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((item) => (
                <MenuItem key={item.community_id} value={item.community_id}>
                  <Checkbox checked={selected.includes(item.community_id)} />
                  <ListItemText primary={item.community_name} />
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>
                <ListItemText primary="No results found" />
              </MenuItem>
            )}
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
