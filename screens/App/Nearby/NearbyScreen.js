import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class NearbyScreen extends Component {
    static navigationOptions = {
        
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                    {key: 'Devin'},
                    {key: 'Jillian'},
                    {key: 'Diana'},
                    {key: 'Julie'},
                    {key: 'Jackson'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 42
    },
    item: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        height: 44,
        color: 'rgb(255, 255, 255)'
    },
})