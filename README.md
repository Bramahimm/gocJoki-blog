# JokiGoC - Next.js & TypeScript

A modern web application for JokiGoC, a professional service platform offering IT services, academic assistance, and premium templates. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with dark theme
- **TypeScript**: Full type safety and better development experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based**: Reusable React components
- **Form Handling**: Client-side validation and form management
- **Admin Dashboard**: Comprehensive admin panel for business management

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Build Tool**: Vite (via Next.js)

## 📁 Project Structure

```
jokigoc-nextjs/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── order/             # Order form
│   ├── templates/         # Templates catalog
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # Reusable components
│   ├── Button.tsx         # Button component
│   ├── Footer.tsx         # Footer component
│   └── Navigation.tsx     # Navigation component
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
├── public/                # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jokigoc-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Pages

### Public Pages
- **Homepage** (`/`) - Landing page with services overview
- **About** (`/about`) - Company information and team details
- **Contact** (`/contact`) - Contact form and information
- **Order** (`/order`) - Service ordering form
- **Templates** (`/templates`) - Template catalog with search and filters

### Admin Pages
- **Admin Dashboard** (`/admin`) - Business overview and management

## 🎨 Components

### Core Components
- `Navigation` - Responsive navigation with mobile menu
- `Button` - Reusable button with variants and sizes
- `Footer` - Site footer with copyright information

### Page Components
- `HomePage` - Landing page with hero section and services
- `OrderPage` - Order form with validation
- `ContactPage` - Contact form and company information
- `TemplatesPage` - Template catalog with search functionality
- `AboutPage` - Company information and team details
- `AdminDashboard` - Admin panel with tabs and data tables

## 🎯 Key Features

### Form Handling
- Client-side validation
- File upload support
- Error handling and success messages
- WhatsApp integration

### Template Management
- Search and filtering
- Category-based organization
- Price formatting
- Download tracking

### Admin Dashboard
- Business statistics
- Order management
- Template management
- Responsive data tables

## 🎨 Styling

The project uses Tailwind CSS with a custom color scheme:

- **Primary Colors**: Blue variants for main actions
- **Dark Theme**: Dark background with light text
- **Responsive Design**: Mobile-first approach
- **Custom Animations**: Fade-in and slide-up effects

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation with hamburger menu
- Adaptive grid layouts
- Touch-friendly interface

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Structure

- **TypeScript**: Full type safety
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting (via Tailwind CSS)
- **Component Architecture**: Reusable and maintainable components

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_NAME=JokiGoC
NEXT_PUBLIC_WHATSAPP_NUMBER=081270934893
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- WhatsApp: 081270934893
- Email: admin@jokigoc.com

## 🔄 Migration from PHP

This project is a complete rewrite of the original PHP application with the following improvements:

- **Modern Tech Stack**: Next.js 14 + TypeScript
- **Better Performance**: Server-side rendering and optimization
- **Enhanced UX**: Modern UI components and animations
- **Type Safety**: Full TypeScript support
- **Responsive Design**: Mobile-first approach
- **Component Reusability**: Modular architecture
- **Better SEO**: Next.js optimization features

---

**JokiGoC** - Professional IT Services & Templates
