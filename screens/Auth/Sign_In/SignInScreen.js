import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
    TextInput,
    SafeAreaView
} from 'react-native'
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAs_X-g5d3ff-m6NL38HeJiDsNei-xOMLM",
    authDomain: "navtest-7c31a.firebaseapp.com",
    databaseURL: "https://navtest-7c31a.firebaseio.com",
    projectId: "navtest-7c31a",
    storageBucket: "navtest-7c31a.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default class SignInScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            disabled: true,
            signInColor: { backgroundColor: 'rgb(90, 89, 90)' }
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user)
            }
        })
    }
    
    signIn = (email, password) => {
        try{
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(this.props.navigation.navigate('App'))
        }
        catch(error){
            console.log(error.toString())
        }
    }

    _signIn = async() => {
        await AsyncStorage.setItem('userToken', 'teris')
        this.props.navigation.navigate('App')
    }

    changer = () => {
        this.state.email && this.state.password ?
            this.setState({disabled: false, signInColor: { backgroundColor: 'rgb(254, 205, 82)' }}) :
            this.setState({disabled: true, signInColor: { backgroundColor: 'rgb(90, 89, 90)' }})
        this.setState({email: this.state.email})
        this.setState({password: this.state.password})
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(37, 36, 36)'}}>
                <View style={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize='none'
                        style={styles.textInput}
                        placeholder='email'
                        placeholderTextColor='rgb(146, 145, 146)'
                        //onChangeText={this.changer}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        autoCorrect={false}
                        clearButtonMode='always'
                        autoFocus={true}
                        keyboardAppearance='light'
                        keyboardType='email-address'
                        selectionColor='rgb(80, 142, 242)'
                        textContentType='emailAddress'
                        color='rgb(37, 36, 36)'
                    />
                    <Text style={styles.alertText}>This email is already in use</Text>
                
                    <TextInput
                        autoCorrect={false}
                        style={styles.textInput}
                        placeholder='password'
                        placeholderTextColor='rgb(146, 145, 146)'
                        //onChangeText={this.changer}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        autoCorrect={false}
                        clearTextOnFocus={true}
                        maxLength={21}
                        enablesReturnKeyAutomatically={true}
                        keyboardAppearance='dark'
                        returnKeyType='go'
                        secureTextEntry={true}
                        selectionColor='rgb(80, 142, 242)'
                        textContentType='password'
                        color='rgb(37, 36, 36)'
                    />
                    <Text style={styles.alertText}>This password is incorrect</Text>
                </View>

                <KeyboardAvoidingView style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}} behavior="padding">
                    <TouchableOpacity
                        style={ [styles.touchableOpacity, this.state.signInColor] }
                        onPress = {this.signIn}
                        activeOpacity={0.2}
                        disabled = {this.state.disabled}
                    >
                        <Text style={ styles.buttonText }>Sign In</Text>
                    </TouchableOpacity>

                    <Button
                        title='Sign In'
                        onPress={this._signIn}
                        //onPress={() => this.signIn(this.state.email, this.state.password)}
                    />

                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('Forgot')}
                    >
                        <Text style={{ color: 'rgb(80, 142, 242)', letterSpacing: 2 }}>Forgot email or password?</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
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