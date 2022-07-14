import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '@constants'
import { ms, vs } from '@utils'

export default function ExpenseRenderItem({ amount, date }) {
    return (
        <TouchableOpacity
            style={{
                justifyContent: 'space-around',
                backgroundColor: colors.white,
                padding: 10,
                marginVertical: 2,
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: ms(8),
                marginVertical: vs(2)
            }}
        >
            <Text>{amount}</Text>
            <Text>{date}</Text>
        </TouchableOpacity>
    )
}