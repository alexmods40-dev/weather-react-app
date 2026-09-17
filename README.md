<img width="1919" height="911" alt="Screenshot_5" src="https://github.com/user-attachments/assets/365fb1ff-aa74-4da0-9201-dda77f2f0a62" />

# Weather React App

A full-stack weather application built with React and Express. It fetches real-time weather data, air quality metrics, and forecasts using WeatherAPI.

## Features

- Current weather and temperature ("feels like", condition text/icon)
- Air quality metrics (CO, NO2, O3, SO2, PM2.5, PM10) with status tooltips
- 5-hour rolling forecast and 5-day daily forecast
- Express backend with rate-limiting and CORS setup

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, Vite, CSS |
| Backend | Node.js, Express, express-rate-limit, dotenv, cors |

## Setup and Run

### Prerequisites

- Node.js and npm installed
- API key from [WeatherAPI](https://www.weatherapi.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alexmods40-dev/weather-react-app.git
   cd weather-react-app
   ```

2. Set up the backend (Terminal 1):

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file inside the `backend` folder with your API key:

   ```env
   API=your_weather_api_key_here
   ```

   Start the backend server:

   ```bash
   node main.js
   ```

3. Set up the frontend (Terminal 2):

   ```bash
   cd frontend/Weather-react-app
   npm install
   npm run dev
   ```

