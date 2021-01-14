import React from 'react'
import {AppContainer} from 'react-navigation'

import GoogleScreen, {Screens} from '../screens/GoogleScreen'
import LoginScreen, {Screens} from '../screens/LoginScreen'
import WelcomeScreen, {Screens} from '../screens/WelcomeScreen'
import FacebookScreen from '../screens/FacebookScreen'
export default class AppContainer extends React.Component(){
    render() {
        return (
          <View>
            <AppContainer/>
          </View>
        );
      }
}

var AppNavigator = createSwitchNavigator({
FacebookScreen:FacebookScreen,
GoogleScreen:GoogleScreen,
LoginScreen:LoginScreen,
WelcomeScreen:WelcomeScreen
})

const AppContainer = createAppContainer(AppNavigator)
