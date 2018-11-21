import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput
} from 'react-native'

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            disabled: true,
            signUpColor: { backgroundColor: 'rgb(90, 89, 90)' }
        }
    }

    changer = () => {
        this.state.firstName && this.state.lastName ?
            this.setState({disabled: false, signUpColor: { backgroundColor: 'rgb(254, 205, 82)' }}) :
            this.setState({disabled: true, signUpColor: { backgroundColor: 'rgb(90, 89, 90)' }})
        this.setState({firstName: this.state.firstName})
        this.setState({lastName: this.state.lastName})
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={{flex: 5, alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize='none'
                        style={styles.textInput}
                        placeholder='first name'
                        placeholderTextColor='rgb(146, 145, 146)'
                        onChangeText={this.changer}
                        value={this.state.firstName}
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardAppearance='light'
                        selectionColor='rgb(80, 142, 242)'
                        textContentType='givenName'
                        color='rgb(37, 36, 36)'
                    />

                    <TextInput
                        autoCorrect={false}
                        autoCapitalize='none'
                        style={styles.textInput}
                        placeholder='last name'
                        placeholderTextColor='rgb(146, 145, 146)'
                        onChangeText={this.changer}
                        value={this.state.lastName}
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardAppearance='light'
                        selectionColor='rgb(80, 142, 242)'
                        textContentType='familyName'
                        color='rgb(37, 36, 36)'
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='go'
                    />

                    <TouchableOpacity
                        style={ [styles.touchableOpacity, this.state.signUpColor] }
                        //onPress = {this.signUp}
                        activeOpacity={0.2}
                        disabled = {this.state.disabled}
                    >
                        <Text style={ styles.buttonText }>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Button
                    title='Go back to Welcome screen'
                    onPress={() => this.props.navigation.navigate('Welcome')}
                />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(37, 36, 36)',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    touchableOpacity: {
        alignItems: 'center',
        borderRadius: 20,
        height: 40,
        width: 125,
        padding: 11,
    },
    buttonText: {
        color: 'rgb(255, 252, 248)',
        letterSpacing: 2,
    },
    textInput: {
        height: 40,
        width: 250,
        padding: 11,
        borderRadius: 5,
        letterSpacing: 2,
        textAlign: 'left',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    alertText: {
        color: 'rgb(219, 81, 73)',
        letterSpacing: 2,
    },
})