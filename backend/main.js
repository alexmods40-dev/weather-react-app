import express from 'express'
import { config } from 'dotenv'
import { fetchWeather } from './utils/fetchWeather.js';
import { fetchWeatherForecast } from './utils/fetchWeatherForecast.js';
import { fetchHourlyWeatherForecast } from './utils/fetchHourlyWeatherForecast.js'
import { rateLimit } from 'express-rate-limit'
import cors from 'cors'


const allowedOrigins = [
  'http://localhost:5173',
  'https://alexmods40-dev.github.io',
];

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000,
	limit: 300,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
	ipv6Subnet: 56,
});
config();
const app = express();
const PORT = 3000;
app.use(limiter);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
}));
export const key = process.env.API;

app.get('/weather/:id', async (req, res) => {
    const city = req.params.id;
    const data = await fetchWeather(city);
    res.send(data);
});

app.get('/weather-forecast/:id', async (req, res) => {
    const city = req.params.id;
    const dailydata = await fetchWeatherForecast(city);
    const hourlyData = await fetchHourlyWeatherForecast(city);
    console.log(dailydata)

    if (dailydata?.error) return res.send(dailydata);
    if (hourlyData?.error) return res.send(hourlyData);

    res.send({'daily': dailydata, 'hourly':hourlyData});
});




app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
