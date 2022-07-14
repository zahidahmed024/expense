import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator } from '@navigations'
import { store, persistor } from '@store/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}