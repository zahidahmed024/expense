import { format, isThisMonth, isThisWeek, isWeekend, parseISO } from 'date-fns';
import React, { useRef, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import { useSelector } from 'react-redux';
import { dateWithinMonth, dateWithinWeek } from '@utils';

export default function ListWithFilter({ expenses, categories }) {
    const [category, setCategory] = useState(null);
    const [week, setWeek] = useState(false);
    const [month, setMonth] = useState(false);
    const refRBSheet = useRef();
    const newCategories = [{ id: 1, name: "All" }, ...categories]
    // let fmDate = format(new Date("Jul 10, 2022"), "yyy,M,d").split(',')
    // console.log('isweekend', isThisWeek(new Date(fmDate[0], fmDate[1] - 1, fmDate[2])))
    // console.log('isweekend', isThisWeek(new Date(2022, 6, 9), { weekStartsOn: 6 }))

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
            // console.log('isweekend', isThisWeek(new Date(fmDate[0], fmDate[1] - 1, fmDate[2])))
        } else if (month) {
            filteredExpenses = filteredExpenses.filter(item => {
                return dateWithinMonth(item.date)
            })
        }
    }

    return (
        <View>
            <Text>{JSON.stringify(category)}</Text>
            <Text>week : {JSON.stringify(week)}</Text>
            <Text>month : {JSON.stringify(month)}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <FilterButton
                    text={category?.name || "All"}
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
                        text="week"
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
                        text="month"
                    />
                </View>
            </View>
            {/* <Text>{JSON.stringify(expenses)}</Text> */}
            <FlatList
                data={filteredExpenses}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            justifyContent: 'space-around',
                            backgroundColor: 'red',
                            padding: 10,
                            marginVertical: 2,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text>amount :{item.amount}</Text>
                        <Text>cat id :{item.categoryId}</Text>
                        <Text>date :{item.date}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
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
                            data={newCategories}
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
        </View>
    )
}

function FilterButton({ onPress = null, text = "", selected = false }) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            backgroundColor: selected ? 'blue' : 'green',
            minWidth: 70,
            borderRadius: 10,
            padding: 5,
        }}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}