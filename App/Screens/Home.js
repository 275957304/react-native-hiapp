import React from 'react'
import { List } from 'antd-mobile'
import {
  View
} from 'react-native'

const Item = List.Item

export default class HomeScreen extends React.Component {
  static navigationOptions () {
    return {
      tabBarLabel: 'Home',
      title: 'HiApp',
    }
  }

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
