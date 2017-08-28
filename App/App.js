import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import RootNavigation from './Navigation/RootNavigation'

import Colors from './Constants/Colors'
import I18n from './I18n'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentWillMount() {
    // Get add set user custom language
    storage.load({
      key: 'customLang',
    }).then(ret => {
      I18n.locale = ret
    }, err => {
      // handle error
      console.log(err)
    }).then(_ => {
      this.setState({
        loaded: true
      })
    })
  }

  render() {
    if (this.state.loaded) {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar backgroundColor={Colors.tintColor} barStyle="light-content" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      )
    } else {
      return (
        <View></View>
      )
    }
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
