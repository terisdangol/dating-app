import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class ForgotScreen extends Component {    
    render() {
        return (
            <View style={styles.container}>
                <Ionicons name='ios-arrow-round-down' size={100} color='rgb(141, 141, 141)' />
                <Text>Forgot Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
})