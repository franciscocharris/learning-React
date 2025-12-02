# Gif Search Application

A modern web application for searching and displaying GIFs using the Giphy API. The application features a clean, responsive interface with search functionality, previous search tracking, and efficient caching.

## About

This project is a React-based GIF search application that allows users to discover and share GIFs. It implements a real-time search with debouncing, maintains a history of previous searches, and caches results for improved performance.

## Technologies

### Core
- **React 19.1.0** - UI library for building the user interface
- **TypeScript 5.8.3** - Static type checking
- **Vite 6.3.5** - Build tool and development server

### HTTP & API
- **Axios 1.9.0** - HTTP client for API requests
- **Giphy API** - External service for GIF data

### Development Tools
- **ESLint 9.25.0** - Code linting
- **TypeScript ESLint 8.30.1** - TypeScript-specific linting rules
- **SWC** - Fast TypeScript/JavaScript compiler

### Styling
- **Custom CSS** - Responsive grid layout with mobile-first approach
- **Montserrat Alternates** - Google Font

## Features

- Real-time GIF search with 700ms debounce
- Previous search terms tracking (up to 8 recent searches)
- Click-to-search from previous terms
- Client-side caching of search results
- Responsive grid layout (2 to 5 columns based on screen size)
- Keyboard support (Enter key to search)

## Architecture

The application follows a modular structure with clear separation of concerns:

- **Components** - Reusable UI components in `src/shared/components` and `src/gifs/components`
- **Hooks** - Custom React hooks in `src/gifs/hooks/useGifs.tsx`
- **Actions** - API interaction logic in `src/gifs/actions/get-gifs-by-query.action.ts`
- **API Configuration** - Axios instance in `src/gifs/api/giphy.api.ts`
- **Interfaces** - TypeScript type definitions in `src/gifs/interfaces`

## Configuration

The application requires a Giphy API key to be set in the environment variables. A template is provided in `.env.template`.

## Author

**Francisco M. Charris C.**

Full Stack Web Developer

## License

Private project
