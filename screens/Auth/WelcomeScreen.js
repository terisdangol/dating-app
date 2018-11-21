import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StatusBar,
    Animated
} from 'react-native'

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 500,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}
export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(0, 0, 0)' }}>
                <StatusBar hidden={true} />
                <View style={{ flex: 4 }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <FadeInView style={{ flex: 1, backgroundColor: 'rgb(255, 112, 67)' }} />
                        <View style={{ flex: 1 }}>
                            <FadeInView style={{ flex: 1, backgroundColor: 'rgb(0, 122, 204)' }} />
                            <FadeInView style={{ flex: 1, backgroundColor: 'rgb(109, 132, 145)' }} />
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={ [styles.touchableOpacity, { backgroundColor: 'rgb(109, 132, 145)' }] }
                        onPress = {() => this.props.navigation.navigate('SignInMain')}
                        activeOpacity={0.9}
                    >
                        <Text style={{ color: 'white', letterSpacing: 2, fontSize: 25, fontWeight: '500' }}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ [styles.touchableOpacity, { backgroundColor: 'rgb(145, 69, 110)' }] }
                        onPress = {() => this.props.navigation.navigate('SignUpMain')}
                        activeOpacity={0.9}
                    >
                        <Text style={{ color: 'white', letterSpacing: 2, fontSize: 25, fontWeight: '500' }}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    touchableOpacity: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '100%',
    },
})