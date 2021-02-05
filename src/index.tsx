import { registerRootComponent } from 'expo'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

import React, { useState, useEffect } from 'react'
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native'

import { Colors } from '@styles/index'

import ArialText from '@components/ArialText'
import Dropdown from '@components/Dropdown'
import City from '@components/City'
import Loading from '@components/Loading'

import { cities, findCityWithId } from '@utils/index'

import { getForecast, getCurrent } from '@services/openweathermap'
import { weatherData } from 'types/openweathermap'

const ScreenHeight = Dimensions.get('window').height

export default function App() {
    const [weatherInformation, setWeatherInformation] = useState<weatherData>([])
    const [selectedCity, setSelectedCity] = useState(cities[0])
    const [loading, setLoading] = useState<boolean>(true)
    const [fontsLoaded] = useFonts({
        Arial: require('./assets/fonts/arial.ttf'),
    })

    useEffect(() => {
        ;(async () => {
            setWeatherInformation([])
            setLoading(true)
            const data: weatherData = []
            for (const id of selectedCity.id) {
                const forecast = await getForecast(id)
                const current = await getCurrent(id)
                if (forecast && current)
                    data.push({
                        forecast,
                        current: {
                            ...current,
                            name: findCityWithId(current.id),
                        },
                    })
            }
            setLoading(false)
            setWeatherInformation(data)
        })()
    }, [selectedCity])

    if (!fontsLoaded) {
        return <Loading />
    }
    return (
        <ScrollView>
            <StatusBar style="light" />
            <ArialText style={styles.header}>Säätutka</ArialText>
            <View style={styles.main}>
                <Dropdown
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    cities={cities}
                />
                {loading ? (
                    <Loading />
                ) : (
                    weatherInformation.length > 0 &&
                    weatherInformation.map((weather, i) => (
                        <City
                            key={i}
                            current={weather.current}
                            forecast={weather.forecast}
                        />
                    ))
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 20,
        backgroundColor: Colors.GRAY_LIGHT,
        minHeight: ScreenHeight - Constants.statusBarHeight / 2,
    },
    header: {
        textAlign: 'center',
        backgroundColor: Colors.BLUE_PURE,
        color: Colors.WHITE,
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight / 2,
        fontSize: 18,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },
})

registerRootComponent(App)
