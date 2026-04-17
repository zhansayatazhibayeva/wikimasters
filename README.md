Wikimasters

Wikimasters is a full-stack content management platform built with Next.js (App Router), focused on authenticated content creation, role-based access control, and scalable API architecture.

Live Demo:
https://wikimasters-4u0s31ps9-zhansayas-projects-deb66b05.vercel.app/

Core Functionality
Implemented custom session-based authentication using cookies (without external providers)
Designed role-based access control (RBAC) for protected routes and admin features
Built full CRUD system for articles with server-side API routes
Integrated AI-powered article summarization
Developed image upload pipeline using Vercel Blob storage
Ensured client/server separation using Next.js App Router patterns
Tech Stack

Frontend

Next.js (App Router)
React
Tailwind CSS
shadcn/ui

Backend

Next.js API routes (server-side logic)
REST API architecture

Database

PostgreSQL (Neon)
Drizzle ORM

Infrastructure

Vercel (deployment)
Vercel Blob (file storage)
Architecture Highlights
Clear separation between server components and client components
Centralized API layer for data operations
Session validation on protected routes
Structured database schema with relational design
Handling of async server logic (cookies, headers, auth state)
Key Challenges Solved
Debugged authentication issues in production (cookies, domain, secure flags)
Configured Neon database connections in serverless environment
Managed environment variables across local and production setups
Resolved client/server boundary issues in Next.js App Router
