import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { format, isToday } from 'date-fns';
import { fontStyle, icons } from '@assets';
import { ms } from '@utils';
import { colors } from '@constants';

export default function DateSelect({ onPress, date, text = '', style }) {
    return (
        <TouchableOpacity
            style={[{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: ms(10),
                paddingVertical: ms(15),
                width: ms(200),
                borderRadius: 5,
                borderWidth: 1,
                borderColor: colors.border
            }, style]}
            onPress={onPress}>
            <Text style={{
                textAlign: 'center',
                ...fontStyle.h5
            }}>{!text ? date : text}</Text>
            {/* {isToday(date) && "today"}  */}
            <Image
                source={icons.down_arrow}
                style={{
                    height: 18,
                    width: 18,
                    // paddingHorizontal: 12
                }}
            />
        </TouchableOpacity>
    );
}
