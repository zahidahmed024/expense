import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Layout, ReUseButton, InputText } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '@store/actions'
import { ms, vs } from '@utils'
import { colors, strings } from '@constants'
import { fontStyle } from '@assets'

export default function Category() {
    const categories = useSelector((state) => state.category.categories)
    const dispatch = useDispatch()
    const [category, setCategory] = useState('');


    const onPressAdd = () => {
        if (!category) {
            alert(strings.please_fill_all_input)
            return false
        }
        dispatch(addCategory({
            id: Date.now(),
            name: category,
        }))
        setCategory('');
    }

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )
    }
    return (
        <Layout>
            <InputText
                placeholder={strings.category_name}
                value={category}
                onChangeText={(text) => setCategory(text)}
            />
            <ReUseButton
                text={strings.add}
                onPress={() => onPressAdd()}
            />
            <FlatList
                style={styles.flatlist}
                data={categories}
                renderItem={RenderItem}
                keyExtractor={item => item.id}
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: ms(10),
        marginVertical: vs(2),
        borderWidth: 1,
        borderColor: colors.border,
        width: ms(250),
        alignSelf: 'center',
        borderRadius: ms(8),
    },
    text: {
        textAlign: 'center',
        ...fontStyle.h4
    },
    flatlist: {
        marginVertical: vs(10)
    }
})