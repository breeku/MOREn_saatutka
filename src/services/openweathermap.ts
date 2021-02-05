import { openWeatherMap } from 'types/openweathermap'
import { API_KEY } from '~env'

export const getCurrent = async (city: number) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&lang=en&appid=${API_KEY}`,
        )
        const json: openWeatherMap.current.Root = await response.json()
        return json
    } catch (e) {
        console.error(e)
        return null
    }
}

export const getForecast = async (city: number) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?id=${city}&units=metric&lang=en&cnt=5&appid=${API_KEY}`,
        )
        const json: openWeatherMap.forecast.Root = await response.json()
        return json
    } catch (e) {
        console.error(e)
        return null
    }
}
