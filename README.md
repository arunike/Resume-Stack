# 📄 Resume Stack

A modern, free, and open-source resume builder designed to help you create professional resumes with ease, privacy, and full control.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [License](#-license)
- [Author](#-author)

## 🌟 Overview
**Resume Stack** is a client-side resume builder application built with modern web technologies. It empowers users to design, customize, and export their resumes without compromising their data privacy. Unlike other platforms, Resume Stack runs entirely in your browser—your data stays with you.

**Key Capabilities:**
- 🔒 **Privacy First**: No account required. All data is stored locally in your browser (LocalStorage).
- 🖱️ **Drag & Drop Interface**: Easily rearrange sections and items using `dnd-kit`.
- 📝 **Rich Text Editing**: Powerful text formatting powered by `Tiptap`.
- 🎨 **Live Customization**: Real-time adjustments for fonts, colors, spacing, and margins.
- 🖨️ **PDF Export**: Pixel-perfect printing and PDF generation.
- 💾 **Data Management**: Export your data to JSON for backup or import it back anytime. Save multiple templates.
- 🌐 **Internationalization**: Built-in support for multiple languages.

## ✨ Features

### 🏗️ Builder Interface
- **Dynamic Preview**: See changes instantly as you edit.
- **Section Management**: Add, remove, or hide sections like Experience, Education, Skills, and Projects.
- **Form-Based Editing**: Clean and intuitive forms for data entry.

### 🎨 Styling & Layout
- **Theme Configuration**: Customize primary colors and typography.
- **Layout Control**: Adjust sidebar width, document padding, and item spacing.
- **Font Selection**: Choose from various professional fonts.

### 🛠️ Advanced Tools
- **Template System**: Save your current layout as a template for future use.
- **Import/Export**: Move your data between devices using JSON files.
- **Print Optimization**: Dedicated CSS ensures your resume looks exactly the same on paper/PDF.

## 🛠 Tech Stack

### Core Framework
- **React 19** - UI library
- **Vite** - Blazing fast build tool
- **TypeScript** - Type safety

### State Management & Logic
- **Zustand** - Minimalist state management
- **Immer** - Immutable state updates
- **i18next** - Internationalization framework

### UI Components & Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn UI (Radix UI)** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Specialized Libraries
- **@dnd-kit** - Drag and drop functionality
- **@tiptap** - Headless WYSIWYG text editor
- **Sonner** - Toast notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v22.12+ recommended)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arunike/resume-stack.git
   ```

2. **Navigate to project directory**
   ```bash
   cd resume-stack
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. **Open Your Browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/             # Static assets (images, logos)
├── bootstrap/          # App initialization (analytics, etc.)
├── components/         # Reusable React components
│   ├── common/         # Generic components
│   ├── ui/             # Shadcn UI components
│   └── widgets/        # Resume specific widgets (nodes, forms)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and libraries
├── locales/            # i18n translation files
├── routes/             # Route definitions and page components
│   └── editor/         # Main editor page and sections
├── store/              # Zustand state stores
├── styles/             # Global styles and Tailwind config
└── types/              # TypeScript type definitions
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## 👤 Author

**Richie Zhou**

- GitHub: [@arunike](https://github.com/arunike)
