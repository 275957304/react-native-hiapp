import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import RootNavigation from './Navigation/RootNavigation'

import Colors from './Constants/Colors'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar backgroundColor={Colors.tintColor} barStyle="light-content" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        <RootNavigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: Colors.tintColor,
  },
})
