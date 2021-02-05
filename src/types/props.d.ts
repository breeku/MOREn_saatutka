import { Dispatch, SetStateAction } from 'react'

import { openWeatherMap } from './openweathermap'

type DropdownProps = {
    selectedCity: { name: string; id: number[] }
    setSelectedCity: Dispatch<SetStateAction<{ name: string; id: number[] }>>
    cities: { name: string; id: number[] }[]
}

type CityProps = {
    current: openWeatherMap.current.Root
    forecast: openWeatherMap.forecast.Root
}

type IntervalsProps = {
    intervals: openWeatherMap.forecast.List[]
}
