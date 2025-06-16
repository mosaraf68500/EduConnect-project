

## 📖 Project Overview

LinguaConnect is a comprehensive Online Tutor Booking Platform designed to connect language learners with qualified tutors worldwide. The platform creates a friendly atmosphere for language learning by providing an intuitive interface for discovering, reviewing, and booking tutors across various languages and subjects. Our mission is to make quality language education accessible globally while streamlining the tutor-student connection process.

## 🚀 Live Demo

**Live Site:** [https://linguaconnect-platform.vercel.app](https://linguaconnect-platform.vercel.app)

**Server Repository:** [https://github.com/username/linguaconnect-server](https://github.com/username/linguaconnect-server)

**Client Repository:** [https://github.com/username/linguaconnect-client](https://github.com/username/linguaconnect-client)

## ✨ Key Features

### 🔐 Authentication & Security
- **Secure Authentication System** with Email/Password and Google Sign-in
- **JWT Token Implementation** for secure API calls and private route protection
- **Firebase Authentication** integration with environment variable protection
- **Persistent Login State** - users remain logged in after page reload

### 🏠 Homepage Experience
- **Dynamic Banner/Carousel** with relevant language learning imagery
- **Real-time Statistics Dashboard** displaying:
  - Total tutors count
  - Total reviews count
  - Available languages count
  - Registered users count
- **Interactive Language Categories** (9+ categories) with clickable navigation
- **Additional Engaging Sections** for enhanced user experience

### 👨‍🏫 Tutor Management
- **Comprehensive Tutor Discovery** with detailed profiles
- **Category-based Filtering** for targeted tutor search
- **Advanced Search Functionality** by language
- **Detailed Tutor Profiles** with ratings, pricing, and descriptions
- **Secure Booking System** with database integration

### 📚 Tutorial Management
- **Add Tutorials** - Tutors can create and publish their courses
- **My Tutorials Dashboard** - Complete CRUD operations for tutorial management
- **Update/Delete Functionality** with real-time UI updates
- **Review System** with automatic count incrementation

### 📅 Booking & Reviews
- **My Booked Tutors** - Personal dashboard for booked sessions
- **Interactive Review System** - Students can review tutors
- **Booking History** with detailed information tracking

### 🎨 User Experience
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Theme Toggle** - Complete theme switching capability
- **Loading States** - Smooth user experience with loading indicators
- **Error Handling** - Custom 404 and error pages
- **Professional UI/UX** - Eye-pleasing color contrast and proper alignment

## 🛠️ Technology Stack

### Frontend
- **React.js** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI,DaisyUi,MambaUI** - Modern component library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling and validation
- **React Query/TanStack Query** - Server state management
- **Framer Motion** - Animation library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Authentication & Security
- **Firebase Authentication** - User authentication service
- **JWT Tokens** - Secure API authentication
- **Environment Variables** - Secure configuration management

### Deployment & DevOps
- **Vercel** - Frontend deployment
- **MongoDB Atlas** - Cloud database hosting
- **Git** - Version control with meaningful commits

## 📦 NPM Packages Used

### Client-Side Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "next": "^14.0.0",
    "tailwindcss": "^3.3.0",
    "@shadcn/ui": "^0.8.0",
    "react-router-dom": "^6.8.0",
    "react-hook-form": "^7.43.0",
    "@tanstack/react-query": "^4.28.0",
    "framer-motion": "^10.12.0",
    "firebase": "^9.19.0",
    "axios": "^1.3.0",
    "react-hot-toast": "^2.4.0",
    "lucide-react": "^0.263.0",
    "date-fns": "^2.29.0"
  }
}
```

### Server-Side Dependencies
```json
{
  "dependencies": {
    "express": "^4.18.0",
    "mongodb": "^5.1.0",
    "mongoose": "^7.0.0",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.0",
    "cors": "^2.8.0",
    "dotenv": "^16.0.0",
    "helmet": "^6.1.0",
    "express-rate-limit": "^6.7.0"
  }
}
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Firebase project setup

### Client Setup
```bash
# Clone the repository
git clone https://github.com/username/linguaconnect-client.git
cd linguaconnect-client

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env.local

# Add your environment variables
VITE_apiKey=AIzaSyCKl9C9bu3ZWSRdnNDPZ51iqIxOVcfQup0
VITE_authDomain=educonnect-9e2c7.firebaseapp.com
VITE_projectId=educonnect-9e2c7
VITE_storageBucket=educonnect-9e2c7.firebasestorage.app
VITE_messagingSenderId=65041421703
VITE_appId=1:65041421703:web:1b607b51068e76fc426f22

NEXT_PUBLIC_API_URL=http://localhost:5000

# Start development server
npm run dev
```

### Server Setup
```bash
# Clone the server repository
git clone https://github.com/username/linguaconnect-server.git
cd linguaconnect-server

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env

# Add your environment variables
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
CLIENT_URL=http://localhost:3000

# Start development server
npm run dev
```

## 🌟 Project Highlights

### Development Best Practices
- **30+ Meaningful Commits** on client-side with descriptive messages
- **15+ Meaningful Commits** on server-side with clear documentation
- **Secure Environment Configuration** for all sensitive data
- **Professional Code Structure** with proper component organization
- **Error Handling** and loading states throughout the application

### Security Features
- **Protected Routes** with JWT authentication
- **Secure API Endpoints** with proper validation
- **Environment Variable Protection** for all sensitive configurations
- **CORS Configuration** for secure cross-origin requests

### Performance Optimizations
- **Responsive Design** ensuring perfect display across all devices
- **Optimized Loading States** for better user experience
- **Efficient Database Queries** with proper indexing
- **Image Optimization** for faster load times

## 🎯 Future Enhancements

- **Real-time Chat System** for tutor-student communication
- **Video Call Integration** for online tutoring sessions
- **Payment Gateway Integration** for secure transactions
- **Advanced Analytics Dashboard** for tutors and administrators
- **Mobile Application** for iOS and Android platforms

