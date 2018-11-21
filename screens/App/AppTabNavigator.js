import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import OrganiseTabs from './OrganiseTabs'
import SearchBar from './SearchBar'
import SettingsTab from './SettingsTab'
import ProfileTab from './ProfileTab'

const MainAppTabNavigator = createMaterialBottomTabNavigator({
    On: {
        screen: OrganiseTabs,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-search' size={28} color={tintColor} />
            ),
            tabBarColor: 'rgb(0, 122, 204)',
            tabBarLabel: '• . • . •'
        }
    },
    EyeOn: {
        screen: SearchBar,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-heart' size={28} color={tintColor} />
            ),
            tabBarColor: 'rgb(139, 195, 74)',
            tabBarLabel: '• . • . •'
        }
    },
    Settings: {
        screen: SettingsTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-settings' size={28} color={tintColor} />
            ),
            tabBarColor: 'rgb(109, 132, 145)',
            tabBarLabel: '• . • . •'
        }
    },
    Profile: {
        screen: ProfileTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-person' size={28} color={tintColor} />
            ),
            tabBarColor: 'rgb(255, 112, 67)',
            tabBarLabel: '• . • . •'
        }
    }
},
{
    labeled: true,
    shifting: true,
    activeColor: 'rgb(255, 247, 212)',
    initialRouteName: 'On',
    order: ['On', 'EyeOn', 'Profile', 'Settings']
})

export default class AppTabNavigator extends Component{
    render(){
        return(
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='light-content' />
                <MainAppTabNavigator />
            </View>
        )
    }
}