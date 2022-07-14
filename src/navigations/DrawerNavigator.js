import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '@screens/dashboard-screen';
import ExpenseScreen from '@screens/expense-screen';
import CategoryScreen from '@screens/category-screen';
import { appRoutes } from '@constants';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name={appRoutes.dashBoard} component={DashboardScreen} />
      <Drawer.Screen name={appRoutes.category} component={CategoryScreen} />
      <Drawer.Screen name={appRoutes.expense} component={ExpenseScreen} />
    </Drawer.Navigator>
  );
}