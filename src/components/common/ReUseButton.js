import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ms, vs } from '@utils'
import { colors } from '@constants'
import { fontStyle } from '@assets'

export default function ReUseButton({ onPress = null, text = "", style }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[{
                alignSelf: 'center',
                width: ms(100),
                padding: ms(10),
                alignItems: 'center',
                backgroundColor: colors.blue,
                borderRadius: ms(10),
                marginVertical: vs(10)
            }, style]}
        >
            <Text
                style={{
                    ...fontStyle.h5
                }}
            >{text}</Text>
        </TouchableOpacity>
    )
}