import React, { Component } from 'react'
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    FlatList,
    Keyboard,
    StyleSheet
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'

const listItems = ['Devin', 'Jillian', 'Diana', 'Julie', 'Jackson']

export default class SearchBar extends Component {
    state = {
        searchBarFocused: false
    }

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    }

    keyboardDidShow = () => {
        this.setState({ searchBarFocused: true })
    }

    keyboardWillShow = () => {
        this.setState({ searchBarFocused: true })
    }

    keyboardWillHide = () => {
        this.setState({ searchBarFocused: false })
    }

    updateList = () => {

    }

    render() {
        return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(37, 36, 36)' }}>
            <View style={{ height: 50, backgroundColor: 'rgb(139, 195, 74)', justifyContent: 'center', padding: 11 }}>
                <Animatable.View animation='slideInRight' duration={500} style={{ height: 40, flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                    <Animatable.View animation={this.state.searchBarFocused ? 'fadeInLeft' : 'fadeInRight'} duration={400}>
                        <Icon name={this.state.searchBarFocused ? 'md-arrow-back' : 'ios-search'} style={{ fontSize: 20 }} />
                    </Animatable.View>
                    <TextInput 
                        placeholder='Search'
                        autoCorrect={false}
                        autoCapitalize='none'
                        clearButtonMode='always'
                        style={styles.textInput}
                        placeholderTextColor='rgb(146, 145, 146)'
                        onChangeText={(searchText) => this.updateList(searchText)}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        keyboardAppearance='dark'
                        returnKeyType='search'
                        selectionColor='rgb(80, 142, 242)'
                        color='rgb(37, 36, 36)'
                    />
                </Animatable.View>
            </View>

            <FlatList
                style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.5)' : 'rgb(37, 36, 36)' }}
                data={listItems}
                renderItem={({ item }) => <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold', height: 44, color: 'rgb(255, 255, 255)' }}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: 250,
        padding: 11,
        borderRadius: 5,
        letterSpacing: 2,
        textAlign: 'left',
        backgroundColor: 'rgb(255, 255, 255)',
        fontSize: 18,
        marginLeft: 15,
        flex: 1
    },
})