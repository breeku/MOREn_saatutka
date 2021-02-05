export module openWeatherMap {
    export module forecast {
        export interface Main {
            temp: number
            feels_like: number
            temp_min: number
            temp_max: number
            pressure: number
            sea_level: number
            grnd_level: number
            humidity: number
            temp_kf: number
        }

        export interface Weather {
            id: number
            main: string
            description: string
            icon: string
        }

        export interface Clouds {
            all: number
        }

        export interface Wind {
            speed: number
            deg: number
        }

        export interface Rain {
            [key: string]: number
        }

        export interface Snow {
            [key: string]: number
        }

        export interface Sys {
            pod: string
        }

        export interface List {
            dt: number
            main: Main
            weather: Weather[]
            clouds: Clouds
            wind: Wind
            visibility: number
            pop: number
            rain: Rain
            snow: Snow
            sys: Sys
            dt_txt: string
        }

        export interface Coord {
            lat: number
            lon: number
        }

        export interface City {
            id: number
            name: string
            coord: Coord
            country: string
            timezone: number
            sunrise: number
            sunset: number
        }

        export interface Root {
            cod: string
            message: number
            cnt: number
            list: List[]
            city: City
        }
    }

    export module current {
        export interface Coord {
            lon: number
            lat: number
        }

        export interface Weather {
            id: number
            main: string
            description: string
            icon: string
        }

        export interface Main {
            temp: number
            feels_like: number
            temp_min: number
            temp_max: number
            pressure: number
            humidity: number
        }

        export interface Wind {
            speed: number
            deg: number
        }

        export interface Rain {
            [key: string]: number
        }

        export interface Snow {
            [key: string]: number
        }

        export interface Clouds {
            all: number
        }

        export interface Sys {
            type: number
            id: number
            message: number
            country: string
            sunrise: number
            sunset: number
        }

        export interface Root {
            coord: Coord
            weather: Weather[]
            base: string
            main: Main
            visibility: number
            wind: Wind
            rain: Rain
            snow: Snow
            clouds: Clouds
            dt: number
            sys: Sys
            timezone: number
            id: number
            name: string
            cod: number
        }
    }
}

export type weatherData = {
    forecast: openWeatherMap.forecast.Root
    current: openWeatherMap.current.Root
}[]
