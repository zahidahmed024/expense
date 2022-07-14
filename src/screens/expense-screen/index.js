import React, { useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Button, SafeAreaView } from 'react-native'
import { DateSelect, Layout, DropdownSelect, ListWithFilter, InputText, ReUseButton, CategoryRenderItem } from '@components'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import { addExpense } from '@store/actions';
import { ms, vs } from '@utils';
import { colors, strings } from '@constants';
import { fontStyle } from '@assets';

export default function Expense() {
    const categories = useSelector((state) => state.category.categories)
    const expenses = useSelector((state) => state.expense.expenses)
    const dispatch = useDispatch()
    const [date, setDate] = useState(format(new Date(), 'MMM dd, yyyy'));
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [category, setCategory] = useState(null);
    const [amount, setAmount] = useState(null);
    const [toggleExpense, setToggleExpense] = useState(false);
    const refRBSheet = useRef();

    const onSubmitAdd = () => {
        if (!amount || !category?.id) {
            alert(strings.please_fill_all_input)
            return false
        }
        dispatch(addExpense({
            id: Date.now(),
            date: date,
            amount: amount,
            categoryId: category.id
        }))
        setAmount(null)
        setCategory(null)
    }

    return (
        <Layout>
            <ReUseButton
                text={toggleExpense ? strings.close : strings.addExpense}
                onPress={() => setToggleExpense(!toggleExpense)}
                style={{
                    width: ms(120),
                    alignSelf: 'flex-end',
                    marginHorizontal: ms(20),
                    marginVertical: vs(20),
                }}
            />
            {

                toggleExpense ? <View style={{
                    alignItems: 'center',
                    marginVertical: vs(10)
                }}>

                    <DateSelect
                        date={date}
                        onPress={() => setShowDatePicker(true)}
                    />
                    <InputText
                        placeholder={strings.amount}
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                        style={{ width: ms(200) }}
                    />
                    <DateSelect
                        text={category?.name || strings.select_category}
                        onPress={() => refRBSheet.current.open()}
                    />

                    <ReUseButton
                        text={strings.add}
                        onPress={() => onSubmitAdd()}
                    />
                </View> : null
            }
            {
                expenses.length > 0 && (
                    <ListWithFilter
                        categories={categories}
                        expenses={expenses}
                    />
                )
            }

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
                height={600}
                customStyles={{ container: { height: 'auto', minHeight: vs(400) } }}
            >
                <SafeAreaView>
                    {categories.length > 0 ? (
                        <>
                            <FlatList
                                data={categories}
                                renderItem={({ item }) => (
                                    <CategoryRenderItem
                                        name={item.name}
                                        onPress={() => {
                                            setCategory(item)
                                            refRBSheet.current.close()
                                        }}
                                    />
                                )}
                                keyExtractor={item => item.id}
                            />
                        </>
                    ) : (
                        <Text
                            style={{
                                padding: ms(20),
                                ...fontStyle.h1
                            }}
                        >{strings.you_do_not_have_category}</Text>
                    )

                    }

                </SafeAreaView>
            </RBSheet>
        </Layout >
    )
}