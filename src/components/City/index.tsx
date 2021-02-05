import React from 'react'

import { View, StyleSheet, Image } from 'react-native'

import Intervals from './Intervals'
import ArialText from '@components/ArialText'

import { Colors, Utils } from '@styles/index'

import { timestampToDate } from '@utils/index'

import { CityProps } from 'types/props'

export default function City({ current, forecast }: CityProps) {
    const { list } = forecast
    const { dt, name } = current
    const { description, icon } = current.weather[0]
    const { temp, humidity } = current.main
    const { speed } = current.wind
    const rain = current.rain && current.rain['3h']
    const snow = current.snow && current.snow['3h']

    return (
        <View>
            <View style={styles.cityContainer}>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <ArialText style={styles.city}>{name}</ArialText>
                        <ArialText style={styles.weather}>
                            {description.charAt(0).toUpperCase() + description.slice(1)}
                        </ArialText>
                    </View>
                    <View style={styles.temperatureContainer}>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
                            }}
                        />
                        <ArialText style={styles.temperature}>
                            {Math.round(temp)} °C
                        </ArialText>
                    </View>
                </View>
                <View style={[styles.container, styles.itemMargin]}>
                    <View style={styles.item}>
                        <ArialText style={styles.date}>
                            {timestampToDate(dt).toDateString()}
                        </ArialText>
                        <ArialText style={styles.weather}>
                            {timestampToDate(dt).toLocaleTimeString()}
                        </ArialText>
                    </View>
                    <View>
                        <ArialText style={styles.details}>Wind: {speed} m/s</ArialText>
                        <ArialText style={styles.details}>
                            Humidity: {humidity} %
                        </ArialText>
                        <ArialText style={styles.details}>
                            Precipitation (3 h): {rain || snow || 0} mm
                        </ArialText>
                    </View>
                </View>
            </View>

            <Intervals intervals={list} />
        </View>
    )
}

const styles = StyleSheet.create({
    cityContainer: {
        ...Utils.border,
        ...Utils.margin,
        backgroundColor: '#fff',
    },
    city: {
        fontSize: 19,
        color: Colors.GRAY_VERY_DARK,
    },
    weather: {
        fontSize: 13,
        color: Colors.BLUE_DARK_GRAYISH,
    },
    date: {
        color: Colors.GRAY_VERY_DARK,
        fontSize: 15,
    },
    time: {
        color: Colors.BLUE_DARK_GRAYISH,
        fontSize: 13,
    },
    temperature: {
        color: Colors.GRAY_VERY_DARK,
        fontSize: 26,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    details: {
        color: Colors.BLUE_DARK_GRAYISH,
        fontSize: 13,
        textAlign: 'right',
    },
    icon: {
        width: 70,
        height: 70,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    item: { flex: 1, marginTop: 'auto', marginBottom: 'auto' },
    itemMargin: { marginTop: 15 },
    temperatureContainer: {
        flexDirection: 'row',
    },
})
