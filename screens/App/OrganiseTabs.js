import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import RecentScreen from './Recent/RecentScreen'
import NearbyScreen from './Nearby/NearbyScreen'

const TopTabNavigator = createMaterialTopTabNavigator({
    Nearby: {
        screen: NearbyScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-compass' size={24} color={tintColor} />
            ),
            tabBarLabel: 'Nearby'
        }
    },
    Recent: {
        screen: RecentScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-albums' size={24} color={tintColor} />
            ),
            tabBarLabel: 'Recent'
        }
    }
},
{
    initialRouteName: 'Nearby',
    order: ['Recent', 'Nearby'],
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    optimizationsEnabled: false,
    tabBarOptions: {
        activeTintColor: 'rgb(251, 192, 45)',
        showIcon: true,
        showLabel: false,
        pressOpacity: 0.2,
        scrollEnabled: false,
        indicatorStyle: {
            backgroundColor: 'rgb(251, 192, 45)',
            height: '2%',
            borderRadius: 5,
        },
        style: {
            backgroundColor: 'rgb(37, 36, 36)',
            borderBottomColor: 'grey',
            borderBottomWidth: StyleSheet.hairlineWidth
        },
    }
})

export default class OrganiseTabs extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(37, 36, 36)' }}>
                <TopTabNavigator />
            </SafeAreaView>
        )
    }
}