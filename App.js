import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Question, 
  QuestResult, 
  Screen1, 
  Screen2a, 
  Screen2b, 
  Screen3, 
  Screen4, 
  Screen5, 
  Screen6, 
  Screen7, 
  Cours, 
  Notification, 
  Notes, 
} from './src/screens'
import Navbar from './src/components/CustomNavigationBar'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            header: (props) => <Navbar {...props} />,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} options= {{headerShown:false}}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options= {{headerShown:false}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options= {{headerShown:false}} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Question" component={Question} options= {{headerShown:false}} />
          <Stack.Screen
            options= {{headerShown:false}}
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="QuestResult" component={QuestResult} options= {{headerShown:false}}/>
          <Stack.Screen name="Screen1" component={Screen1} options= {{headerShown:false}}/>
          <Stack.Screen name="Screen2a" component={Screen2a} options= {{headerShown:false}}/>
          <Stack.Screen name="Screen2b" component={Screen2b} options= {{headerShown:false}}/>
          <Stack.Screen name="Screen3" component={Screen3} options= {{headerShown:false}}/>
          <Stack.Screen name="Screen4" component={Screen4} options= {{headerShown:false}}/>
          <Stack.Screen name="Screen5" component={Screen5} options= {{headerShown:false}}/>
          <Stack.Screen name="Screen6" component={Screen6} options= {{headerShown:false}}/>
          <Stack.Screen name="Screen7" component={Screen7} options= {{headerShown:false}}/>
          <Stack.Screen name="Cours" component={Cours} />
          <Stack.Screen name="Notification" component = {Notification} />
          <Stack.Screen name ="Notes" component = {Notes} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
