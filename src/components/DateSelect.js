import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { format, isToday } from 'date-fns';
import { icons } from '@assets';

export default function DateSelect({ onPress, date, text = '', style }) {
    return (
        <TouchableOpacity
            style={[{
                flexDirection: 'row',
                // backgroundColor: 'green',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // height: 35,
                padding: 5,
                width: 120,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'grey'
            }, style]}
            onPress={onPress}>
            <Text style={{
                textAlign: 'center',
                // ...fontStyle.h5
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
