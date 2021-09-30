import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function ImpText(props) {
    return <Text style = { styles.text } {...props }
    />
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: '#1E90FF',
        fontWeight: 'bold',
        paddingVertical: 12,
        textAlign: 'center',
    },
})