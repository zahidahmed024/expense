import React, { useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native'
import { DateSelect, Layout, DropdownSelect, ListWithFilter } from '@components'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import { addExpense } from '@store/actions';

export default function Expense() {
    const categories = useSelector((state) => state.category.categories)
    const expenses = useSelector((state) => state.expense.expenses)
    const dispatch = useDispatch()

    const [date, setDate] = useState(format(new Date(), 'MMM dd, yyyy'));
    // let utcStartDate = startOfDay(date).toISOString()
    // let utcEndDate = endOfDay(date).toISOString()
    // let utcStartDate = format(date, 'yyyy-MM-dd')
    // let utcEndDate = endOfDay(date).toISOString()
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [category, setCategory] = useState(null);
    const [amount, setAmount] = useState(null);
    const refRBSheet = useRef();
    return (
        <Layout>
            <Text>date : {date}</Text>
            <Text>amount : {amount}</Text>
            <Text>category : {JSON.stringify(category)}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                <Text> select date : </Text>
                <DateSelect
                    date={date}
                    onPress={() => setShowDatePicker(true)}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                <Text> amount : </Text>
                <TextInput
                    style={{
                        width: 150,
                        height: 36,
                        backgroundColor: 'red'
                    }}
                    onChangeText={(text) => setAmount(text)}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                <Text> category : </Text>
                <DateSelect
                    text={category?.name || 'select'}
                    onPress={() => refRBSheet.current.open()}
                />
            </View>
            <Button
                title='add'
                onPress={() => {
                    // validation required

                    dispatch(addExpense({
                        id: Date.now(),
                        date: date,
                        amount: amount,
                        categoryId: category.id
                    }))
                    setAmount(null)
                    setCategory(null)
                }}
            />
            {/* <Text>{JSON.stringify(expenses)}</Text> */}
            <ListWithFilter
                categories={categories}
                expenses={expenses}
            />

            <DateTimePickerModal
                isVisible={showDatePicker}
                mode='date'
                onConfirm={(date) => {
                    setShowDatePicker(false)
                    setDate(format(new Date(date), 'MMM dd, yyyy'))
                }}
                onCancel={() => {
                    setShowDatePicker(false)
                }}
            />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                // height={100}
                height={600}
            // customStyles={{ container: { flex: 1 } }}
            // customStyles={{ container: { height: 'auto', maxHeight: 650 } }}
            >
                {categories.length > 0 && (
                    <>
                        <FlatList
                            data={categories}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    // console.log(item)
                                    setCategory(item)
                                    refRBSheet.current.close()
                                }}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </>
                )}
            </RBSheet>
        </Layout>
    )
}