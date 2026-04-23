import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherActions.ts";

const Weather = () => {
    const city = useAppSelector(state => state.city);
    const {data: weather, error, isLoading} = useGetWeatherByCityQuery(city, {
        skip: !city,
        // refetchOnMountOrArgChange: true, // при true кэш не используется (можно задать время в секундах и в таком случае кэш задействуется на это время)
    refetchOnFocus: true, // при переключении и возврате на страницу происходит обновление запроса
    pollingInterval: 1000 * 60, // повторение запроса через определенное время
    skipPollingIfUnfocused: true, // если пользователь не в фокусе запросы не выполняются
    });

    if (!city) {
        return <div className={'infoWeath'}>Enter city name</div>
    }

    if (isLoading) {
        return <div className={'infoWeath'}>Loading...</div>
    }

    if (error) {
        return <div className={'error'}>Enter correct city name</div>
    }

    return (
        <div className={'infoWeath'}>
            {!!weather &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
                </>
            }
        </div>
    )
}

export default Weather;