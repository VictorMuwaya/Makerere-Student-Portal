# Student Portal - Makerere University

This is a modern, high-performance student dashboard designed specifically for the students of Makerere University. It provides a centralized gateway to manage academic life, from tracking CGPA trends to course registration and schedule management.

## 🎓 Overview

Built with a focus on aesthetics and usability, this portal embodies the Makerere motto, *"We Build for the Future"*. The interface utilizes a "floating island" design philosophy, featuring glassmorphism effects and a responsive layout that works seamlessly across mobile, tablet, and desktop devices.

## ✨ Key Features

- **Dynamic Dashboard**: View real-time statistics including current CGPA, total credit units (CU), and pending assignments.
- **CGPA Visualizer**: Interactive charts powered by Recharts to track academic performance across semesters on the Ugandan 5.0 scale.
- **Academic Course Management**: Browse, search, and register for course units with a streamlined registration workflow.
- **Smart Timetable**: A day-by-day breakdown of lecture schedules and locations across the Main Campus.
- **Floating Command Center**: A sticky, elevated header providing quick access to global search, notifications, and profile management that stays accessible as you scroll.
- **Notification Center**: Real-time alerts for academic results, financial deadlines, and campus events.

## 🛠️ Technology Stack

- **React 19**: Modern UI component architecture.
- **Tailwind CSS**: Utility-first styling for a clean, professional aesthetic.
- **Recharts**: Data visualization for academic performance.
- **FontAwesome**: High-quality iconography.
- **Cloudflare Pages**: High-speed global hosting.

## 🚀 Getting Started

### Local Development

1. Clone the repository.
2. Ensure you have a modern browser.
3. Serve the directory using any local web server (e.g., `npx serve .` or Live Server in VS Code).
4. Access the portal at `http://localhost:3000` (or your local port).

### Deployment

This project is pre-configured for **Cloudflare Pages**. 

To deploy:
1. Install the Wrangler CLI: `npm install -g wrangler`
2. Authenticate: `wrangler login`
3. Deploy: `wrangler pages deploy .`

Refer to the `wrangler.json` file for environment configuration.

## 🎨 Design System

The application uses the official Makerere University color palette:
- **Primary Red**: `#990000` (Representing the Ivory Tower)
- **Primary Dark**: `#0f172a` (Slate 900)
- **Background**: `#f8fafc` (Slate 50)

---
*Disclaimer: This is a digital portal concept designed to demonstrate modern frontend engineering for higher education institutions.*
