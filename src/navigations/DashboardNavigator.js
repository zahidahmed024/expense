import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '@screens/dashboard';
import { Expense } from '@screens/expense';
import { Category } from '@screens/category';

const Stack = createNativeStackNavigator();

function DashboardNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="exp" component={Expense} />
            <Stack.Screen name="category" component={Category} />
        </Stack.Navigator >
    );
}

export default DashboardNavigator;