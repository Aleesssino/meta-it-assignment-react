# Meta Movies

## Project Overview

Meta Movies is a React-based movie search application developed as part of an assignment for Meta IT. The application provides a comprehensive movie discovery experience with advanced search and interaction features.

## Tech Stack

- Frontend: React + Vite
- Language: TypeScript
- Styling: Tailwind CSS
- Data handling: TanStack Query
- API: TMDB (The Movie Database)

## Features

- Global search bar
- Comprehensive movie search functionality
- Infinite scroll pagination
- Favorite movies management
- Responsive design
- Detailed movie information display

## Prerequisites

- Node.js
- pnpm

## Local Setup

### 1. Clone the Repository

    ```
    git clone git@github.com:Aleesssino/meta-it-assignment-react.git
    cd meta-it-assignment-react
    ```

### 2. Environment Configuration

Create a `.env` file in the root directory and add your TMDB API key:

    ```
    VITE_API_KEY=your_tmdb_api_key_here
    ```

### 3. Install Dependencies

    ```
    pnpm install
    ```

### 4. Run Development Server

    ```
    pnpm dev
    ```

## Accessing the Application

    Open your browser and navigate to `http://localhost:5173`

## Potential Improvements

- Implement unit and integration tests
- Enhance error handling
- Add more pages (trending, recommendations)
- Implement user authentication
