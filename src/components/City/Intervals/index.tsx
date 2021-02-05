import React from 'react'

import { View, StyleSheet, Image } from 'react-native'

import ArialText from '@components/ArialText'

import { Utils } from '@styles/index'

import { timestampToDate } from '@utils/index'

import { Colors } from '@styles/index'

import { IntervalsProps } from 'types/props'

export default function Intervals({ intervals }: IntervalsProps) {
    return (
        <View style={styles.intervals}>
            {intervals.map((interval, i) => {
                const { dt } = interval
                const { icon } = interval.weather[0]
                const { temp, humidity } = interval.main
                const { speed } = interval.wind
                const rain = interval.rain && interval.rain['3h']
                const snow = interval.snow && interval.snow['3h']
                return (
                    <View key={i} style={[{ flexDirection: 'column' }, Utils.border]}>
                        <View style={styles.intervalContainer}>
                            <ArialText style={styles.time}>
                                {timestampToDate(dt).toLocaleTimeString()}
                            </ArialText>
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
                        <View style={styles.detailsContainer}>
                            <ArialText style={styles.details}>{speed} m/s</ArialText>
                            <ArialText style={styles.details}>{humidity} %</ArialText>
                            <ArialText style={styles.details}>
                                {rain || snow || 0} mm
                            </ArialText>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    intervals: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    intervalContainer: {
        backgroundColor: '#fff',
        paddingLeft: 5,
        paddingRight: 5,
    },
    time: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 13,
        color: Colors.BLUE_DARK_GRAYISH,
    },
    temperature: {
        textAlign: 'center',
        color: Colors.BLUE_DARK_GRAYISH,
        fontSize: 15,
        marginBottom: 5,
    },
    details: {
        textAlign: 'center',
        color: Colors.BLUE_DARK_GRAYISH,
        fontSize: 10,
    },
    icon: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 50,
        height: 50,
    },
    detailsContainer: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: Colors.BLUE_LIGHT_GRAY,
    },
})
