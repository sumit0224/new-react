# 📌 Project Features

## ✅ Features You Already Have

* Excel-like ribbon toolbar with separate tabs (`Home`, `Insert`, `Share`, `Page Layout`)
* Home toolbar controls with interactive font-size dropdown state
* Insert/Share/Page Layout command bars with grouped actions and icons
* Spreadsheet grid rendering (`30 x 26`) with column labels (`A-Z`) and row numbers
* Sticky header row and sticky row index column for better scrolling UX
* Cell selection with active-cell highlight (green border)
* Inline cell editing with click-to-edit and blur-to-save behavior
* Formula bar connected to selected cell value and address
* Centralized grid data model using React Context (`GridContext`)
* Multi-sheet footer UI:
* Add new sheets
* Switch active sheet tab
* Rename sheets (double-click to edit)
* Sheet list drop-up panel
* App-level tab and workbook UI state via React Context (`GlobalContext`)
* Toolbar-specific UI state via React Context (`ToolBarContext`)
* Reusable icon registry and reusable Tailwind utility classes
* Clean modular component structure for staged feature rollout

## 🚀 Features You Should Add Next

### 1) Core Spreadsheet Behavior (High Priority)

* Keyboard navigation (`Arrow keys`, `Enter`, `Tab`, `Shift+Tab`)
* Multi-cell selection (drag select + range highlight)
* Copy/paste support for ranges (Ctrl/Cmd+C, Ctrl/Cmd+V)
* Row/column insert and delete actions
* Column width and row height resize
* Persist workbook state in `localStorage`

### 2) Formula & Data Features (High Priority)

* Basic formula engine (`=SUM`, `=AVERAGE`, `=MIN`, `=MAX`, `=COUNT`)
* Cell reference parsing (`A1`, `B2:C5`)
* Formula recalculation when dependent cells change
* Display formula in formula bar while showing computed value in cell
* Data type detection (number, text, date, currency)

### 3) Editing Productivity (Medium Priority)

* Undo/redo stack for cell edits and formatting
* Fill handle (drag to auto-fill sequence)
* Find and replace panel
* Freeze first row / first column
* Context menu on right-click (cut/copy/paste/insert/delete)

### 4) Formatting System (Medium Priority)

* Per-cell style state (bold, italic, color, alignment, borders)
* Format painter behavior
* Number format presets (currency, percent, date)
* Wrap text and merge/unmerge cells
* Conditional formatting rules

### 5) Data Management & Sharing (Medium Priority)

* Import CSV
* Export CSV/XLSX
* Multiple workbook files (new/open/save)
* Sheet-level duplicate, rename, delete, reorder
* Sheet protection (read-only mode)

### 6) Advanced/Portfolio Features (High Impact)

* Virtualized rendering for large sheets (performance)
* Formula dependency graph and circular reference detection
* Sort and filter per column
* Charts bound to selected ranges
* Collaborative editing (real-time sync with backend)
* Backend persistence (Node/Express + DB) with user auth

## 🧭 Recommended Build Order

1. Keyboard navigation + multi-cell selection + copy/paste
2. Local persistence + undo/redo
3. Basic formula engine + dependency recalculation
4. Formatting state model + toolbar action wiring
5. CSV import/export + sort/filter
6. Performance optimizations + backend/collaboration
