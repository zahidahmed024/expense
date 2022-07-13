import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@constants'

export default function Layout({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    }
})