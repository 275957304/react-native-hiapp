/* eslint react/display-name: 0 */
import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

import { TabNavigator, TabBarBottom } from 'react-navigation'
import IconfontConf from '../Utils/iconfontConf'
import Colors from '../Constants/Colors'

import HomeScreen from '../Screens/Home'
import ContactsScreen from '../Screens/Contacts'
import SettingsScreen from '../Screens/Settings'

const tabIconfont = {
  Home: 'ios7homeoutline',
  Contacts: 'ios7chatbubbleoutline',
  Settings: 'ios7gearoutline',
  HomeSelected: 'ios7home',
  ContactsSelected: 'ios7chatbubble',
  SettingsSelected: 'ios7gear'
}

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Contacts: {
      screen: ContactsScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: Colors.tintColor,
      },
      tabBarIcon: ({ focused }) => { // eslint-disable-line
        const { routeName } = navigation.state
        const iconName = focused ? tabIconfont[`${routeName}Selected`] : tabIconfont[routeName]
        return (
          <Text style={[styles.tabIcon, focused ? styles.selectedTabIcon : {}]}>{IconfontConf(iconName)}</Text>
        )
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.tintColor
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
)

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 28,
    color: Colors.tabIconDefault,
    fontFamily: 'iconfont'
  },
  selectedTabIcon: {
    color: Colors.tabIconSelected
  }
})
