import { createStackNavigator } from 'react-navigation'

import SignUpScreen from '../Sign_Up/SignUpScreen'

export default createStackNavigator({
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false
        })
    }
},
{
    initialRouteName: 'SignUp',
    headerMode: 'none',
    mode: 'modal'
})