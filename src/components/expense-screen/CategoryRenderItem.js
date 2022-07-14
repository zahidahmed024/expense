import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ms, vs } from '@utils'
import { colors } from '@constants'

export default function CategoryRenderItem({ name = "", onPress = null }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                padding: ms(10),
                marginVertical: vs(2),
                borderWidth: 1,
                borderColor: colors.border,
                width: ms(250),
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: ms(8),
            }}
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}