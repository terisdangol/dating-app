import { createStackNavigator } from 'react-navigation'

import SignInScreen from '../Sign_In/SignInScreen'
import ForgotScreen from '../Sign_In/ForgotScreen'

export default createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false
        })
    },
    Forgot: {
        screen: ForgotScreen,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: true,
            gestureResponseDistance: {vertical: 300}
        })
    }
},
{
    initialRouteName: 'SignIn',
    headerMode: 'none',
    mode: 'modal'
})