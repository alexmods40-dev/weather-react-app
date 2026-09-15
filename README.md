# Weather React App

A full-stack weather application built with React and Express. It fetches real-time weather data, air quality metrics, and forecasts using WeatherAPI.

## Features

- Current weather and temperature ("feels like", condition text/icon)
- Air quality metrics (CO, NO2, O3, SO2, PM2.5, PM10) with status tooltips
- 5-hour rolling forecast and 5-day daily forecast
- Express backend with rate-limiting and CORS setup

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express, `express-rate-limit`, `dotenv`, `cors`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- API key from [WeatherAPI.com](https://www.weatherapi.com/)

### Installation & Run

1. **Clone the repository:**

   git clone [https://github.com/alexmods40-dev/weather-react-app.git](https://github.com/alexmods40-dev/weather-react-app.git)
   cd weather-react-app

   Backend setup:
   cd backend
   npm install
   Create a .env file in the backend directory: API=your_weather_api_key_here

   Run the backend server:
   node main.js
   Server will start on http://localhost:3000.

   Frontend setup:
   cd frontend/Weather-react-app
   npm install
   npm run dev
   Open http://localhost:5173 in your browser.


