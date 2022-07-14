import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ms, vs } from '@utils'
import { colors } from '@constants'

export default function InputText({ value, onChangeText, placeholder = "", style }) {
    return (
        <TextInput
            style={[{
                // backgroundColor: colors.blue,
                borderWidth: 1,
                borderColor: colors.border,
                height: vs(40),
                width: ms(250),
                alignSelf: 'center',
                paddingHorizontal: ms(10),
                marginVertical: vs(10),
                borderRadius: ms(8)
            }, style]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    )
}