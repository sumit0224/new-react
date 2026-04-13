# 🧠 Project Skills Breakdown

## 🚀 Technologies Used

* React 18 (functional components + hooks)
* Vite 5 build tooling with `@vitejs/plugin-react`
* Tailwind CSS 3 with PostCSS + Autoprefixer
* `react-icons` for modular icon rendering
* Modern JavaScript (ES modules)
* Frontend-only implementation (no backend/API integration present in this repository)

## 🏗️ Architecture & Design

* Context-driven architecture with separated state domains across `GlobalContext`, `GridContext`, and `ToolBarContext`
* `GlobalContext` handles app-level UI state (`activeTab`, sheets, active sheet, sheet editing/drop-up state)
* `GridContext` manages spreadsheet data (30x26 matrix), selected cell metadata, and immutable cell updates
* `ToolBarContext` controls ribbon-specific state (font-size dropdown + selected font size)
* Provider composition in `main.jsx` creates a predictable top-down state tree: `ToolBarProvider -> GridProvider -> GlobalContext -> App`
* `App.jsx` uses active-tab mapping to swap ribbon modules (`Home`, `InsertBar`, `ShareBar`, `PageLayoutBar`) via a single render switch object
* Spreadsheet UI is decomposed into focused units (`Grid`, `Cell`, `FunctionBar`, `Footer`) with clear responsibility boundaries
* Shared icon registry (`src/assets/icons.js`) centralizes icon imports and improves maintainability of toolbar components
* `Navbar`, `Grid`, `FunctionBar`, and `Footer` are implemented as modules and currently commented in `App.jsx`, showing staged integration

## 🎯 Features Implemented

* Excel-like Home ribbon with formatting controls, alignment actions, number-format section, and font-size dropdown interaction
* Dedicated toolbar modules for Insert, Share, and Page Layout actions with grouped command areas
* Spreadsheet grid module includes sticky column headers (`A-Z`), sticky row numbering (`1-30`), and a scrollable viewport
* Cell interaction model supports click-to-select highlighting, inline edit mode, blur-to-exit behavior, and live writes to a 2D matrix
* Formula bar linked to selected cell coordinates/value for direct editing
* Workbook footer module supports adding sheets, renaming by double-click, active sheet switching, and sheet-list drop-up

## 🧩 Core Concepts Applied

* React Context API for cross-component state orchestration
* `useMemo` and `useCallback` to stabilize context values and handlers
* Immutable nested state updates for tabular data structures
* Derived UI state (`cellLabel`, `cellValue`, active-cell detection)
* Controlled and semi-controlled input patterns in different editing surfaces
* Conditional rendering for dropdowns, active tabs, edit states, and contextual UI blocks
* Reusable Tailwind utility classes for consistent design language (`tool-btn`, `dropdown-box`, `function-bar`, etc.)

## ⚡ Advanced Skills Demonstrated

* Spreadsheet-style state modeling using a 2D array with targeted row cloning for efficient updates
* Multi-context separation by domain (global app state vs grid logic vs toolbar UX state)
* Desktop-product interaction patterns implemented in web UI (ribbon commands, formula bar, sheet tabs)
* Component-level modularity that supports iterative feature rollout without rewriting core structure
* Practical performance-minded React patterns in a data-dense interface

## 📈 What This Project Shows About the Developer

* Strong ability to translate complex desktop spreadsheet workflows into React component architecture
* Good command of state-driven UI engineering, especially around tabular editing and contextual controls
* Clear emphasis on modular, reusable frontend design that scales feature-by-feature
* Comfortable combining UX detail work (Excel-like interactions) with maintainable code organization
* Demonstrates portfolio-level readiness for frontend roles involving interactive productivity tools and data-heavy interfaces
