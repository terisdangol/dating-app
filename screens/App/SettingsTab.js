import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage,
    StatusBar
} from 'react-native'

export default class SettingsTab extends Component {
    signOut = async() => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Loading')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title = 'Sign Out' onPress = {this.signOut} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(37, 36, 36)',
        alignItems: 'center',
        justifyContent: 'center',
    },
})