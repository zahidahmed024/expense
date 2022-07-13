import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TextBox({ onPress = null, text = '' }) {
    return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 30,
        backgroundColor: 'blue',
        marginVertical: 10,
        marginHorizontal: 3
    },
    text: {
        textAlign: 'center',
        backgroundColor: 'red'
    }
})