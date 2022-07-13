import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, addCategory } from '@store/actions'

export default function Dashboard() {
  const [categories, expenses] = useSelector((state) => [state.category.categories, state.expense.expenses])
  const dispatch = useDispatch()

  useEffect(() => {

  }, []);

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>categories : {JSON.stringify(categories)}</Text>
      <Text>expenses : {JSON.stringify(expenses)}</Text>
      <Button
        title='press'
        onPress={() => {
          dispatch(addCategory({
            id: Date.now().toString(),
            name: "cat2"
          }))
        }}
      />
      <Button
        title='press'
        onPress={() => {
          dispatch(addExpense({
            id: Date.now().toString(),
            categoryId: 'cat1',
            name: "expanse 1"
          }))
        }}
      />
    </View>
  )
}