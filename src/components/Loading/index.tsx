import React from 'react'

import { View, ActivityIndicator, StyleSheet } from 'react-native'

import { Colors } from '@styles/index'

export default function Loading() {
    return (
        <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color={Colors.BLUE_PURE} />
        </View>
    )
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },
})
