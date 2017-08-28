import React from 'react'
import { List } from 'antd-mobile'
import {
  View
} from 'react-native'

import I18n from '../I18n'

const Item = List.Item

export default class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: I18n.t('home'),
    title: 'HiApp',
  })

  render () {
    return (
      <View>
        <List renderHeader={() => 'Basic Style'}>
          <Item extra={'extra content'}>Title</Item>
        </List>
      </View>
    )
  }
}
