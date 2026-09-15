<img width="1000" height="660" alt="Screenshot_5" src="https://github.com/user-attachments/assets/62e87f3b-6df0-4acc-8d1d-82e27c9bb0e7" />

# Weather React App

A full-stack weather application built with React and Express. It fetches real-time weather data, air quality metrics, and forecasts using WeatherAPI.

## Features

- Current weather and temperature ("feels like", condition text/icon)
- Air quality metrics (CO, NO2, O3, SO2, PM2.5, PM10) with status tooltips
- 5-hour rolling forecast and 5-day daily forecast
- Express backend with rate-limiting and CORS setup

## Tech Stack

- Frontend: React, Vite, CSS
- Backend: Node.js, Express, express-rate-limit, dotenv, cors

## Setup and Run

1. Clone the repository:

git clone [https://github.com/alexmods40-dev/weather-react-app.git](https://github.com/alexmods40-dev/weather-react-app.git)
cd weather-react-app

2.
Terminal 1 - Backend
cd backend
npm install

Create .env file with your API key: API=your_weather_api_key_here
node main.js

Terminal 2 - Frontend
cd frontend/Weather-react-app
npm install
npm run dev
