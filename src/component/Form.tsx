import type {SubmitEvent} from "react";
import {useState} from "react";
import {fetchWeather} from "../features/api/weatherAction.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();


    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default Form;