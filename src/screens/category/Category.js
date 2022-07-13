import React, { useState } from 'react'
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import { Layout } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '@store/actions'

export default function Category() {
    const categories = useSelector((state) => state.category.categories)
    const dispatch = useDispatch()
    const [category, setCategory] = useState('');

    const RenderItem = ({ item }) => {
        return <Text> category Name: {item.name} </Text>
    }
    return (
        <Layout>
            {/* <Text>category: {JSON.stringify(categories)}</Text> */}
            {/* <Text>categoryname: {category}</Text> */}
            <TextInput
                style={{
                    backgroundColor: 'red',
                    height: 40,
                    width: 200,
                }}
                value={category}
                onChangeText={(text) => setCategory(text)}
            />
            <Button
                title='add'
                onPress={() => {
                    dispatch(addCategory({
                        id: Date.now(),
                        name: category,
                    }))
                    setCategory('');
                }}
            />
            <FlatList
                data={categories}
                renderItem={RenderItem}
                keyExtractor={item => item.id}
            />
        </Layout>
    )
}