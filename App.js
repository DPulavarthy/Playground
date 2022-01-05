// Import modules.
import { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator as navigator } from '@react-navigation/native-stack'

// Import pages.
import Login from './pages/login.js'
import Home from './pages/home.js'

// Merge objects.
Object.mergify = (m, ...s) => { JSON.parse(JSON.stringify(s)).map(o => Object.keys(o).map(k => m[k] = o[k])); return m }

// Global login properties.
global.Login = { username: null, password: null }

// Navigator declaration.
const Stack = navigator()

// App
export default class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">

          {/* Login Page. */}
          <Stack.Screen name="Login" component={Login} options={{
            headerStyle: { backgroundColor: '#555555' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: 'bold' }
          }} />

          {/* Home Page. */}
          <Stack.Screen name="Home" component={Home} options={{
            headerStyle: { backgroundColor: '#555555' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: 'bold' }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
