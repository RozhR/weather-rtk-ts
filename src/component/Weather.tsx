import {useAppSelector} from "../app/hooks.ts";
import type {WeatherInfo} from "../utils/type";

const Weather = () => {
    const weather: WeatherInfo = useAppSelector(state => state.weather);
    const message = useAppSelector(state => state.message);

    if (message) {
        return (
            <div className={'error'}>{message}</div>
        )
    } else {
        return (
            <div className={'infoWeather'}>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date (weather.sunset).toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Weather;