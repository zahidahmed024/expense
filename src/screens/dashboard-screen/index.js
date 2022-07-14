import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, addCategory } from '@store/actions'
import { Layout, TextBox, TotalExpense } from '@components'
import { strings } from '@constants'
import { ms, vs } from '@utils'
import { fontStyle } from '@assets'

export default function DashboardScreen({ navigation }) {
  const [categories, expenses] = useSelector((state) => [state.category.categories, state.expense.expenses])
  const dispatch = useDispatch()

  let totalExpense = expenses.reduce((total, item) => {
    return total + parseFloat(item.amount)
  }, 0)
  // console.log('totalExpense', totalExpense)
  return (
    <Layout>
      <View style={styles.container}>
        <TotalExpense
          text={strings.total_expense}
          amount={totalExpense + ' tk '}
        />
      </View>
      <View style={styles.instructions}>
        <Text style={{ ...fontStyle.h3 }}>{strings.instructions}:</Text>
        <Text style={{ ...fontStyle.h5 }}>{strings.press_drawer}</Text>
        <Text style={{ ...fontStyle.h5 }}>{strings.submit_category}</Text>
        <Text style={{ ...fontStyle.h5 }}>{strings.add_expense_ins}</Text>
        <Text style={{ ...fontStyle.h5 }}>{strings.filter}</Text>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: vs(100),
    alignItems: 'center',
  },
  instructions: {
    flex: 1,
    padding: ms(10)
  }
})