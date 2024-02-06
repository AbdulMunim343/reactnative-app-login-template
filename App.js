import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  ListScreen,
  PersonScreen,
} from './src/screens'

const Stack = createStackNavigator()
//const Drawer = createStackNavigator()
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="PersonScreen" component={PersonScreen} />
        </Stack.Navigator>

        {/* <Drawer.Section title="Some title">
          <Drawer.Item label="First Item" active={active === 'Dashboard'} onPress={() => setActive('Dashboard')}/>
          <Drawer.Item label="Second Item" active={active === 'ListScreen'} onPress={() => setActive('ListScreen')}/>
        </Drawer.Section> */}

        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </Provider>
  )
}
