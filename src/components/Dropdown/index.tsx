import React, { ReactText } from 'react'

import { View, StyleSheet } from 'react-native'

import { Picker } from '@react-native-picker/picker'

import { Utils } from '@styles/index'

import { DropdownProps } from 'types/props'

export default function Dropdown({
    selectedCity,
    setSelectedCity,
    cities,
}: DropdownProps) {
    return (
        <View style={styles.dropdownContainer}>
            <Picker
                selectedValue={selectedCity.name}
                onValueChange={(value: ReactText, index: number) =>
                    setSelectedCity(cities[index])
                }>
                {cities.map(city => (
                    <Picker.Item key={city.name} label={city.name} value={city.name} />
                ))}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownContainer: { ...Utils.margin, ...Utils.border, backgroundColor: '#fff' },
})
