# Modern Website with Python Backend & React Frontend

A modern full-stack website built with Python (FastAPI), React, Tailwind CSS, Framer Motion, and Three.js.

## 🚀 Tech Stack

### Backend
- **Python 3.11+** with FastAPI
- **SQLAlchemy** for database ORM
- **Pydantic** for data validation
- **Uvicorn** for ASGI server

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Three.js** for 3D graphics
- **React Router** for navigation

## 📁 Project Structure

```
TatariSystems/
├── backend/                 # Python FastAPI backend
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── core/           # Core configurations
│   │   ├── models/         # Database models
│   │   ├── schemas/        # Pydantic schemas
│   │   └── services/       # Business logic
│   ├── requirements.txt
│   └── main.py
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Utility functions
│   │   ├── types/          # TypeScript types
│   │   └── assets/         # Static assets
│   ├── public/             # Static files (images, etc.)
│   │   ├── assets/         # Logo and other assets
│   │   └── headshots/      # Team member photos
│   ├── package.json
│   └── index.html
├── shared/                 # Shared types/utilities
└── docker-compose.yml      # Development environment
```

## 🛠️ Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- Git

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Development with Docker
```bash
docker-compose up --build
```

## 🌟 Features

- **Modern UI/UX** with Tailwind CSS
- **Smooth Animations** with Framer Motion
- **3D Graphics** with Three.js
- **Type Safety** with TypeScript
- **Fast API** with FastAPI
- **Real-time Updates** with WebSockets
- **Responsive Design** for all devices

## 📝 API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🎨 Design System

The project uses a consistent design system with:
- **Color Palette**: Modern gradients and solid colors
- **Typography**: Inter font family
- **Spacing**: Tailwind's spacing scale
- **Animations**: Framer Motion for smooth transitions
- **3D Elements**: Three.js for interactive 3D content

## 🚀 Deployment

### Backend (Python)
- Deploy to Railway, Render, or Heroku
- Use PostgreSQL for production database

### Frontend (React)
- Deploy to Vercel, Netlify, or GitHub Pages
- Build optimized for production

### GitHub Pages Deployment

The frontend is configured for GitHub Pages deployment with the following setup:

1. **Base Path**: The Vite config uses `/TatariSystems/` as the base path for production builds
2. **Asset Paths**: All static assets (images, logos, headshots) use the `getAssetPath()` utility function
3. **File Structure**: 
   - Images are stored in `frontend/public/assets/` and `frontend/public/headshots/`
   - Referenced in code using the utility function for proper GitHub Pages paths

#### Asset Management
- **Logo**: `/public/assets/tatarilogo.png`
- **Team Photos**: `/public/headshots/[lastname].jpg`
- **Path Utility**: `src/utils/paths.ts` handles production vs development paths

#### Build and Deploy
```bash
cd frontend
npm run build
# The dist/ folder is ready for GitHub Pages deployment
```

## 📄 License

MIT License - feel free to use this project for your own applications! 