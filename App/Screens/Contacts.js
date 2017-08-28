import React from 'react'
import {
  View,
  Text
} from 'react-native'

import I18n from '../I18n'

export default class ContactsScreen extends React.Component {
  static navigationOptions = () => ({
    title: I18n.t('contacts'),
  })

  render () {
    return (
      <View>
        <Text>aaaaa</Text>
      </View>
    )
  }
}
