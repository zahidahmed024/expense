import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '@screens/dashboard';
import DashboardNavigator from './DashboardNavigator';
import { Expense } from '@screens/expense';
import { Category } from '@screens/category';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="dashboardNavigator" component={DashboardNavigator} />
      <Drawer.Screen name="category" component={Category} />
      <Drawer.Screen name="expd" component={Expense} />
    </Drawer.Navigator>
  );
}