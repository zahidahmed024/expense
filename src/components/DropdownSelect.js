import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { format, isToday } from 'date-fns';
import { icons } from '@assets';

export default function DateSelect({ showPicker, date, style }) {
    return (
        <TouchableOpacity
            style={[{
                flexDirection: 'row',
                // backgroundColor: 'green',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // height: 35,
                width: 120,
                paddingVertical: 5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'grey'
            }, style]}
            onPress={showPicker}>
            <Text style={{
                flex: 1,
                textAlign: 'center',
                // ...fontStyle.h5
            }}> {format(new Date(), 'MMM dd, yyyy')}</Text>
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
