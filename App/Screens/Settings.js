/* eslint react/prop-types: 0 */
import React from 'react'
import { List, WhiteSpace } from 'antd-mobile'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import IconfontConf from '../Utils/iconfontConf'
import I18n from '../I18n'

const Item = List.Item

export default class SettingsScreen extends React.Component {
  static navigationOptions = () => ({
    title: I18n.t('settings'),
  })

  render() {
    return (
      <View>
        <WhiteSpace size="lg" />
        <List>
          <Item thumb={this._listItemIcon('feedback2', '#0c9')} arrow="horizontal">{I18n.t('feedback')}</Item>
        </List>
        <WhiteSpace size="lg" />
        <List>
          <Item thumb={this._listItemIcon('language', '#09f')} arrow="horizontal" onClick={() => this.props.navigation.navigate('Language')}>{I18n.t('language')}</Item>
        </List>
        <WhiteSpace size="lg" />
        <List>
          <Item thumb={this._listItemIcon('about1', '#fc3')} arrow="horizontal" onClick={() => this.props.navigation.navigate('About')}>{I18n.t('about')}</Item>
        </List>
      </View>
    )
  }

  _listItemIcon(name, color) {
    return (
      <Text style={[styles.itemIcon, { color }]}>{IconfontConf(name)}</Text>
    )
  }
}

const styles = StyleSheet.create({
  itemIcon: {
    fontSize: 24,
    fontFamily: 'iconfont',
    marginRight: 10,
    marginTop: 3
  }
})
