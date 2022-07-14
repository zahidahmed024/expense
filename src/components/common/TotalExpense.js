import { View, Text } from 'react-native'
import React from 'react'
import { fontStyle } from '@assets'
import { colors } from '@constants'
import { ms, vs } from "@utils"
export default function TotalExpense({ text = "", amount }) {
    // console.log(amount)
    return (
        <View style={{
            height: vs(100),
            width: ms(200),
            backgroundColor: colors.white,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: ms(8),
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.24,
            shadowRadius: 4.27,
            elevation: 5,
        }}>
            <Text style={{ textAlign: 'center', ...fontStyle.h3 }}>{text}</Text>
            <Text style={{ textAlign: 'center', ...fontStyle.h4, marginTop: vs(5) }}>{amount}</Text>
        </View>
    )
}