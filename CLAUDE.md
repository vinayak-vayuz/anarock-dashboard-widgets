# CLAUDE.md

## Project Overview

- This repository is a reusable React widget library for ANAROCK dashboards.
- It contains residential and commercial dashboard widgets packaged for reuse in other applications.
- Widgets are primarily presentational cards, charts, and section wrappers.
- The repo also includes a local playground for visual development and manual verification.

## Tech Stack

- React 18
- JavaScript / JSX
- Vite
- Tailwind CSS utilities
- Recharts
- MUI (`@mui/material`, `@mui/icons-material`)
- Emotion (`@emotion/react`, `@emotion/styled`)
- `react-icons`
- `lucide-react`
- `react-datepicker`

Not present in this repo:

- TypeScript source files
- Redux
- React Context as a formal app-level state layer
- Socket.IO / websockets
- React Hook Form
- Dedicated API client layer

## Project Structure

```text
src/
  index.js
  index.css
  playground/
    App.jsx
    main.jsx
    index.css
    index.html
  widgets/
    components/
    utils/
    overview/
    community/
    financials/
    facilities/
    gate-and-security/
    helpdesk/
    engagement/
    commercial-dashboard/
    commercial-smart-access/
    commercial-helpdesk/
    commercial-visitors/
    commercial-amenities/
    commercial-asset-management/
    commercial-guard-petrol/
    commercial-food-and-order/
    commercial-table/
```

### Folder Responsibilities

- `src/index.js`
  - Public export surface for the package.
  - Any widget intended for external consumption must be exported here.

- `src/playground/`
  - Local development harness.
  - Used to render widgets in isolation and check layout/visual behavior.

- `src/widgets/components/`
  - Shared UI building blocks used across multiple widget sections.
  - Examples:
    - `Card.jsx`
    - `CardNoLogo.jsx`
    - `Header.jsx`
    - `CommercialHeader.jsx`
    - `ActionButtons.jsx`

- `src/widgets/utils/`
  - Cross-widget helpers and common fallback UI.
  - Examples:
    - `EmptyState.jsx`
    - `formatAmount`
    - `updateSession`

- `src/widgets/<section>/`
  - Section-level wrapper components.
  - Each folder usually has:
    - `index.jsx` for section composition
    - `component/` or `components/` for actual widget cards/charts

### Section Examples

- Residential:
  - `src/widgets/community/`
  - `src/widgets/financials/`
  - `src/widgets/helpdesk/`

- Commercial:
  - `src/widgets/commercial-amenities/`
  - `src/widgets/commercial-visitors/`
  - `src/widgets/commercial-asset-management/`

## Component Architecture

### Component Types

- Section wrappers
  - Compose multiple child widgets into a page/grid.
  - Usually live at `src/widgets/<section>/index.jsx`.

- Presentational widgets
  - Cards, charts, summary panels.
  - Usually accept `data` or similarly named props.

- Shared UI primitives
  - Card shells, headers, tooltips, chips, empty states.
  - Reused across multiple sections.

### Smart vs Dumb Components

- Mostly dumb/presentational:
  - Most widgets receive props and render UI.
  - Data transformation is local and lightweight.

- Light smart behavior inside components:
  - Some widgets normalize API-shaped data before rendering.
  - Some widgets manage local UI state:
    - date pickers
    - legend toggles
    - local pagination

- No dedicated container layer exists.
  - If adding one, keep business/data orchestration above presentational widgets.

### Reusable Component Patterns

- Use `Card.jsx` for standard dashboard cards.
- Use `CardNoLogo.jsx` for commercial cards and date-navigation variants.
- Use `Header.jsx` for residential section-level date/export controls.
- Use `CommercialHeader.jsx` for commercial section headers.
- Use `EmptyState.jsx` for explicit no-data rendering.

## State Management

### Current State Model

- Local component state with `useState` is the primary state mechanism.
- Derived view data is often computed inline or with `useMemo`.
- There is no Redux store and no centralized global app state inside this package.

### Where State Lives

- Widget-local state:
  - chart legend visibility
  - local date picker state
  - pagination state
  - dropdown open/close state

- Browser storage state:
  - `sessionStorage` is used in `ActionButtons.jsx` and `utils/index.jsx`
  - keys used:
    - `community_id`
    - `widget_id`
    - `export`

### When To Use Local State

- Use local state for:
  - temporary UI interactions
  - date controls local to a widget
  - table pagination
  - visual toggles

### When To Use Global State

- There is no in-repo global state layer today.
- If cross-widget coordination is needed, current code uses:
  - `sessionStorage`
  - custom browser events such as `dashboard-update`

- Do not introduce Redux or Context unless the change requires true cross-section orchestration.

## API Layer

### Current Reality

- There is no dedicated `services/` or API client layer in this repository.
- Most widgets are data-agnostic UI components and expect props from a host application.
- Some components include local normalization for backend-shaped data.

### Existing Data Pattern

- Components often accept raw API-like payloads and normalize internally.
- Example normalization pattern:
  - convert snake_case fields into render-friendly values
  - coerce numbers with `Number(...) || 0`
  - guard missing labels with `"Unknown"` or `"-"`

### Recommended API Integration Pattern

If adding real API integration later:

- Keep fetch logic outside widget components.
- Add data fetching in the host application or a future `services/` layer.
- Pass normalized props into widgets when possible.
- If a widget must normalize, do it once near the top of the component.

## Socket Architecture

- Not applicable in the current repository.
- No socket initialization, event bus, or reconnection logic exists.
- Do not add socket logic directly into presentational widgets.

## UI Guidelines

### Naming Conventions

- Component names: PascalCase
- Hook names: `useXxx` if custom hooks are added later
- Utility function names: camelCase
- Section wrappers should ideally be descriptively named, even though some existing files still use `function index()`

### Layout Structure

- Section wrapper:
  - header first
  - grid layout second
  - cards inside grid cells

- Widgets:
  - top bar with title/icon/period
  - main content area
  - optional footer

### Styling Approach

- Tailwind utility classes are the primary styling method.
- MUI is used selectively for controls/icons.
- Avoid introducing a second styling system unless necessary.

### Responsive Design Approach

- Most layouts use Tailwind grid classes and responsive column changes.
- Prefer existing patterns such as:
  - `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
  - `lg:grid-cols-[minmax(0,1fr)_minmax(0,4fr)]`

- New widgets should:
  - degrade cleanly on smaller widths
  - avoid fixed widths unless the design already requires them
  - handle long labels without breaking charts or layouts

## Forms Handling

- No formal forms layer exists.
- Small input interactions are handled with local state.
- Current examples include:
  - `react-datepicker`
  - MUI `Select`
  - local search/filter state

Rules:

- Keep form state local unless multiple widgets must share it.
- Validate defensively at the component boundary.
- Prefer simple controlled inputs over adding heavy form abstractions.

## Performance Rules

- Keep widgets presentational and cheap to render.
- Use `useMemo` only when:
  - data normalization is non-trivial
  - chart transformations are repeated
  - derived arrays/objects are expensive enough to justify memoization

- Avoid:
  - recreating large transformed arrays multiple times in JSX
  - unnecessary state for purely derived values
  - deep prop drilling for temporary UI-only state

- Prefer:
  - one normalization block near the top of the component
  - stable empty checks before rendering charts
  - safe `ResponsiveContainer` usage for Recharts

- Lazy loading is not currently set up in this package.
- If introduced later, apply it at section/playground level, not inside small leaf components.

## Code Conventions

### Naming

- Components: PascalCase
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE for true constants, otherwise camelCase
- Props:
  - prefer descriptive names like `data`, `rows`, `totalAssets`, `onDateChange`

### File Naming

- Existing code uses `.jsx`.
- Component files are mostly PascalCase or descriptive kebab-lowercase variants already present in the repo.
- Follow the local folder convention before introducing a new naming style.

### Hooks Naming

- If custom hooks are added, name them `useXxx`.
- Keep hooks pure and UI-agnostic when possible.

### Component File Structure

Recommended order:

1. imports
2. constants / dummy data
3. helper functions
4. component definition
5. data normalization
6. early empty-state return
7. JSX
8. export default

## Common Patterns

### 1. Dummy Data Fallback

Common pattern in commercial widgets:

- `undefined` or `null` prop:
  - use internal dummy/demo data
- explicit empty array:
  - show `EmptyState`

This keeps the playground populated while still supporting real no-data rendering.

### 2. Empty State Pattern

- Use `src/widgets/utils/EmptyState.jsx`.
- Prefer explicit titles per widget, for example:
  - `No Booking Found`
  - `No Assets Found`
  - `No Visitors Found`

### 3. Local Data Normalization

Typical rules:

- `Array.isArray(data)` before `.map`
- `Number(value) || 0` for numeric fields
- `item?.name || "Unknown"` for labels
- `??` for safe defaults

### 4. Section Composition

- Section `index.jsx` files compose widgets into grids.
- Add new widgets there if they belong to an existing dashboard section.

### 5. Browser Event Coordination

- `updateSession` writes to `sessionStorage` and dispatches `dashboard-update`.
- This is the current pattern for lightweight external coordination.

## Environment Variables

- No environment variable convention is defined in the current repo.
- No `.env` usage is visible in the widget source.

If environment variables are added later:

- use Vite conventions (`import.meta.env`)
- keep secrets out of the package source
- do not hardcode host-specific URLs in widget components

## How to Run the Project

```bash
npm install
npm run dev
npm run build
```

Notes:

- `npm run dev` starts the Vite dev environment.
- `src/playground/App.jsx` is the main place for visual verification.
- `npm run build` produces the package output in `dist/`.

## Important Notes for AI Agents

### Where To Add New Features

- New shared UI primitives:
  - `src/widgets/components/`

- New utility helpers:
  - `src/widgets/utils/`

- New widget cards inside an existing section:
  - `src/widgets/<section>/component/`
  - or `src/widgets/<section>/components/`

- New section wrappers:
  - `src/widgets/<section>/index.jsx`

### Where To Add Public Exports

- Always update `src/index.js`.
- If it is not exported there, external consumers cannot import it.

### Where To Add Playground Examples

- `src/playground/App.jsx`

Add:

- a normal data example
- an empty-data example if the widget has important empty-state behavior

### Null / Empty Handling Rules

Preserve this contract unless explicitly changing the section standard:

- `undefined` / `null`
  - usually show internal demo fallback
- `[]`
  - usually show `EmptyState`
- all-zero datasets
  - often should also be treated as empty for charts where zero bars/areas add no value

### Things Agents Should Not Modify Without Reason

- `src/index.js` export names unless intentionally changing public API
- shared card/header components unless the change is meant to affect multiple widgets
- browser storage keys:
  - `community_id`
  - `widget_id`
  - `export`
- existing layout patterns in unrelated sections
- package output settings in `package.json`, `vite.config.js`, or build config unless required

### Known Caveats

- Some files use `function index()` instead of descriptive names.
- Some export names in `src/index.js` are inconsistent with implementation names.
- Some widgets are more demo-driven than data-driven.
- `CommercialHeader.jsx` is mostly visual and not a full interaction layer.
- `ActionButtons.jsx` contains commented filter UI; export behavior is the active part.

### Safe Workflow For New Widget Integration

1. Add the widget file in the correct section folder.
2. Reuse `Card.jsx` or `CardNoLogo.jsx`.
3. Normalize incoming data near the top of the component.
4. Handle `undefined`, `null`, empty array, and all-zero states.
5. Use `EmptyState` for explicit no-data rendering.
6. Add the widget to the relevant section `index.jsx`.
7. Export it from `src/index.js`.
8. Render it in `src/playground/App.jsx`.
9. Run `npm run build` if the task includes functional code changes.
