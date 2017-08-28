import React from 'react'
import { StackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import AboutScreen from '../Screens/About'
import LanguageScreen from '../Screens/Language'
import ProfileScreen from '../Screens/Profile'
import FeedbackScreen from '../Screens/Feedback'

import Colors from '../Constants/Colors'

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    About: {
      screen: AboutScreen,
    },
    Language: {
      screen: LanguageScreen,
    },
    Profile: {
      screen: ProfileScreen
    },
    Feedback: {
      screen: FeedbackScreen
    }
  },
  {
    navigationOptions: () => ({
      headerTintColor: Colors.headerTintColor,
      headerStyle: {
        backgroundColor: Colors.tintColor,
      },
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
)

export default class RootNavigator extends React.Component {
  render () {
    return <RootStackNavigator />
  }
}
