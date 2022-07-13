import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '@screens/dashboard';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Notifications" component={Dashboard} />
    </Drawer.Navigator>
  );
}