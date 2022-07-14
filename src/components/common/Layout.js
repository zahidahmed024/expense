import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '@constants'

export default function Layout({ children }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})