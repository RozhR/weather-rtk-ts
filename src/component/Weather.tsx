import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherAction.ts";

const Weather = () => {
    const city = useAppSelector(state => state.city);
    const {data, error, isLoading} = useGetWeatherByCityQuery(city);

    if (!city) {
        return <div className={'error'}>Enter city name</div>
    }

    if (isLoading) {
        return <div className={'infoWeather'}>Loading...</div>
    }

    if (error) {
        return <div className={'error'}>Enter correct city name</div>
    }

    return (
        <div className={'infoWeath'}>
            {!!data &&
                <>
                    <p>Location: {data.sys.country}, {data.name}</p>
                    <p>Temp: {data.main.temp}</p>
                    <p>Pressure: {data.main.pressure}</p>
                    <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
        </div>
    )
}

export default Weather;