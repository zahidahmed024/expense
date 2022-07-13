import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, addCategory } from '@store/actions'
import { Layout, TextBox, TotalExpense } from '@components'

export default function Dashboard({ navigation }) {
  const [categories, expenses] = useSelector((state) => [state.category.categories, state.expense.expenses])
  const dispatch = useDispatch()

  useEffect(() => {

  }, []);

  return (
    <Layout>
      <View style={{
        flex: 1,
        marginTop: 150,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* <Text>{JSON.stringify(categories)}</Text> */}
        <TotalExpense />
        <View style={{ flexDirection: 'row' }}>
          <TextBox onPress={() => navigation.navigate('exp')} text='expenses' />
          <TextBox onPress={() => navigation.navigate('category')} text='categories' />
        </View>
      </View>
    </Layout>
  )
}