import { View, Text } from 'react-native'
import React from 'react'

export default function TotalExpense({ amount }) {
    return (
        <View style={{
            height: 100,
            width: 200,
            backgroundColor: 'red',
            justifyContent: 'center'
        }}>
            <Text style={{
                textAlign: 'center'
            }}>TotalExpense {amount}</Text>
        </View>
    )
}