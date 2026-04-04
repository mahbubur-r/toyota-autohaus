# Toyota Autohaus 🚗🚘

**🌍 Live Preview**: [https://toyota-autohaus.netlify.app/](https://toyota-autohaus.netlify.app/)

A modern, responsive, and dynamic automotive dealership web application built for Toyota Autohaus. This application provides a seamless experience for browsing new and used cars, exploring car leasing options, and booking services, all bundled in an aesthetically pleasing and highly optimized user interface.

---

## 🌟 Features

- **Dynamic Homepage**: Features interactive components such as a floating vehicle search, featured car showcases, and hot deals & limited-time offers with custom geometrical designs.
- **New & Used Cars Inventory**: Distinct, easy-to-use lists and detailed views for exploring both new inventory and certified pre-owned Toyota vehicles.
- **Car Leasing Module**: A comprehensive leasing section enabling users to filter by vehicle conditions, adjust price ranges, and view detailed leasing options.
- **Detailed Vehicle Profiles**: Dive into individual car details including specifications, sales contact integration, and top-visited vehicle carousels.
- **Service Center Locator & Booking**: Integrated service portal highlighting precision, available services, map integrations, and service center locations.
- **Multi-language Support**: Designed with internationalization in mind, featuring built-in locale switching functionalities (English/Deutsch) powered directly from the Navbar.
- **Fully Responsive UI**: Mobile-first approach ensuring a beautiful, pristine experience on all formats (desktop, tablet, and mobile).

---

## 🛠️ Technology Stack

This application takes advantage of the highly performant modern web development ecosystem.

- **Frontend Core**: [React](https://react.dev/) (v19) - Used for building reusable components and managing state.
- **Build Tool**: [Vite](https://vitejs.dev/) - Ensuring ultra-fast hot module replacement (HMR) and optimized build times.
- **Routing**: [React Router](https://reactrouter.com/) (v7) - Next-generation routing enabling smooth, client-side page transitions.
- **Styling framework**: [Tailwind CSS](https://tailwindcss.com/) (v4) - Fully custom utility-first CSS framework for rapid and precise styling.
- **Component Library**: [DaisyUI](https://daisyui.com/) (v5) - Tailwind CSS plugin that provides semantic component class names and themes.
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Providing easily accessible and highly scalable SVG icons.
- **Code Quality**: Built-in linting utilizing [ESLint](https://eslint.org/).

---

## 📂 Project Structure

```text
src/
├── assets/          # Static files (images, icons, vectors)
├── components/      # Reusable functional React components
│   ├── About/       # "About Us" and contact-related components
│   ├── CarDetails/  # Individual car specifications and sales contact
│   ├── CarLeasing/  # Leasing criteria configurations and banners
│   ├── Home/        # Landing page sections (Hero, Featured, HotDeals)
│   ├── NewCars/     # New inventory listing features
│   ├── Service/     # Dealership services and map listings
│   ├── UsedCars/    # Certified used cars modules
│   ├── Footer.jsx
│   └── Navbar.jsx
├── Layouts/         # Core layout wrappers (Headers, Footers, Main content blocks)
├── Routes/          # Application routing definitions
├── App.jsx          # Root App Component
├── index.css        # Global CSS + Tailwind directives
└── main.jsx         # Application Entry Point
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or another modern package manager.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahbubur-r/toyota-autohaus.git
   cd toyota-autohaus
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application Locally

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible via your browser at `http://localhost:5173/` (or the respective port indicated in your console).