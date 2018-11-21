import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons'
import {
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation'

import LoadingScreen     from './screens/LoadingScreen'

import WelcomeScreen     from './screens/Auth/WelcomeScreen'
import SignInMain        from './screens/Auth/Sign_In/SignInMain'
import SignUpMain        from './screens/Auth/Sign_Up/SignUpScreen'

import AppTabNavigator   from './screens/App/AppTabNavigator'

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignInMain: {
    screen: SignInMain,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: true,
      gestureResponseDistance: {horizontal: 500}
    })
  },
  SignUpMain: {
    screen: SignUpMain,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: true,
      gestureResponseDistance: {horizontal: 500}
    })
  },
}, {
  headerMode: 'none',
  mode: 'default'
})

export default createSwitchNavigator({
  Loading: LoadingScreen,
  Auth: AuthStackNavigator,
  App: AppTabNavigator
},
{
  initialRouteName: 'Loading'
})