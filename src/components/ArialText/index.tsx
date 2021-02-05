import React from 'react'
import { Text } from 'react-native'

export default function ArialText(props: {
    style: {}[] | {}
    children: React.ReactNode
}) {
    const passedStyles = Array.isArray(props.style)
        ? Object.assign({}, ...props.style)
        : props.style
    return (
        <Text style={[{ ...passedStyles }, { fontFamily: 'Arial' }]}>
            {props.children}
        </Text>
    )
}
