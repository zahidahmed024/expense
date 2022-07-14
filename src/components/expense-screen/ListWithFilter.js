import { format, isThisMonth, isThisWeek, isWeekend, parseISO } from 'date-fns';
import React, { useRef, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import { useSelector } from 'react-redux';
import { dateWithinMonth, dateWithinWeek, ms, vs } from '@utils';
import FilterButton from './FilterButton';
import ExpenseRenderItem from './ExpenseRenderItem';
import CategoryRenderItem from './CategoryRenderItem';
import { fontStyle } from '@assets';
import { strings } from '@constants';

export default function ListWithFilter({ expenses, categories }) {
    const [category, setCategory] = useState(null);
    const [week, setWeek] = useState(false);
    const [month, setMonth] = useState(false);
    const refRBSheet = useRef();
    const newCategories = [{ id: 1, name: "All" }, ...categories]

    let filteredExpenses = []
    if (!category || newCategories.length === 1 || category.id === 1) {
        filteredExpenses = expenses;
        durationFilter()
    } else {
        filteredExpenses = expenses.filter(item => item.categoryId == category.id)
        durationFilter()
    }

    function durationFilter() {
        if (week) {
            filteredExpenses = filteredExpenses.filter(item => {
                return dateWithinWeek(item.date)
            })
        } else if (month) {
            filteredExpenses = filteredExpenses.filter(item => {
                return dateWithinMonth(item.date)
            })
        }
    }
    let totalExpense = filteredExpenses.reduce((total, item) => {
        return total + parseFloat(item.amount)
    }, 0)

    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: ms(20), flexDirection: 'row', justifyContent: 'space-between' }}>
                <FilterButton
                    text={category?.name || strings.all}
                    onPress={() => refRBSheet.current.open()}
                />
                <View style={{ flexDirection: 'row' }}>
                    <FilterButton
                        selected={week}
                        onPress={() => {
                            if (month) {
                                setMonth(false)
                                setWeek(!week)
                            } else {
                                setWeek(!week)
                            }
                        }
                        }
                        text={strings.week}
                    />
                    <FilterButton
                        selected={month}
                        onPress={() => {
                            if (week) {
                                setWeek(false)
                                setMonth(!month)
                            } else {
                                setMonth(!month)
                            }
                        }}
                        text={strings.month}
                    />
                </View>
            </View>
            <Text style={{
                textAlign: 'center',
                marginVertical: vs(10),
                ...fontStyle.h3
            }}>Total {totalExpense || 0} tk</Text>
            {/* <Text>{JSON.stringify(expenses)}</Text> */}
            <FlatList
                style={{
                    paddingHorizontal: ms(20),
                    marginVertical: vs(5)
                }}
                data={filteredExpenses}
                renderItem={({ item }) => (
                    <ExpenseRenderItem
                        amount={item.amount + ' tk'}
                        date={item.date}
                    />
                )}
                keyExtractor={item => item.id}
            />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={vs(600)}
                customStyles={{ container: { height: 'auto', minHeight: vs(400) } }}
            >
                <SafeAreaView>
                    {categories.length > 0 && (
                        <>
                            <FlatList
                                data={newCategories}
                                renderItem={({ item }) => (
                                    <CategoryRenderItem
                                        name={item.name}
                                        onPress={() => {
                                            // console.log(item)
                                            setCategory(item)
                                            refRBSheet.current.close()
                                        }}
                                    />

                                )}
                                keyExtractor={item => item.id}
                            />
                        </>
                    )}
                </SafeAreaView>
            </RBSheet>
        </View>
    )
}

