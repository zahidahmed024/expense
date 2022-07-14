import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '@constants'
import { ms } from '@utils'
import { fontStyle } from '@assets'

export default function FilterButton({ onPress = null, text = "", selected = false }) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            alignItems: 'center',
            backgroundColor: selected ? colors.blue : colors.white,
            minWidth: ms(70),
            maxWidth: ms(200),
            borderRadius: ms(55),
            marginHorizontal: ms(1),
            padding: ms(5),
            borderWidth: 1,
            borderColor: colors.border,
        }}>
            <Text style={{ ...fontStyle.h5 }}>{text}</Text>
        </TouchableOpacity>
    )
}