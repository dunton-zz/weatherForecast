// src/actions/index.js
import axios from 'axios';

const API_KEY = '49f03f0b5f584872484e7ae878dad7c6';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	const url = `${ROOT_URL}&,us`;
	const request = axios.get(url);

	// action creators MUST return an action
	// an action is an object that ALWAYS has a type 
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}