# Vehicle Filter Application

## Overview

The **Vehicle Filter Application** is a simple project built with **Next.js** and **Tailwind CSS**. It allows users to filter vehicle models by make and model year, showcasing dynamic routing, responsive design, and external API integration.

---

## Features

1. **Filter Page**:

   - Dropdown selectors for vehicle make and model year.
   - A "Next" button that becomes active only when valid options are selected.
   - Navigates to a dynamic results page.

2. **Result Page**:

   - Displays vehicle models for the selected make and year.
   - Uses dynamic routing: `/result/[makeId]/[year]`.

3. **Responsive Design**:

   - Styled with Tailwind CSS for a clean, modern interface across devices.

4. **API Integration**:
   - Fetches vehicle data from the **NHTSA API**.

---

## Installation and Usage

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lamphead18/vehicle-filter-app.git
   cd vehicle-filter-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Running the application:
   ```bash
   npm run dev
   ```
