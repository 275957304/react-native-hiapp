/* eslint react/prop-types: 0 */
import React from 'react'
import { List, WhiteSpace } from 'antd-mobile'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import { ajax } from '../Network'
import IconfontConf from '../Utils/iconfontConf'
import I18n from '../I18n'

const Item = List.Item
const Brief = Item.Brief

export default class SettingsScreen extends React.Component {
  static navigationOptions = () => ({
    title: I18n.t('settings'),
  })

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this._getUserInfo()
  }

  render() {
    return (
      <View>
        <WhiteSpace size="lg" />
        <List>
          <Item
            thumb={this._renderUserAvatar()}
            arrow="horizontal"
            multipleLine
            onClick={() => this.props.navigation.navigate('Profile')}
          >
            <Text style={styles.infoName}>{this.state.user.nick_name}</Text><Brief style={styles.infoLocation}>{I18n.t('global.location')}: {this.state.user.location}</Brief>
          </Item>
        </List>
        <WhiteSpace size="lg" />
        <List>
          <Item thumb={this._renderListItemIcon('feedback2', '#0c9')} arrow="horizontal">{I18n.t('feedback')}</Item>
        </List>
        <WhiteSpace size="lg" />
        <List>
          <Item thumb={this._renderListItemIcon('language', '#09f')} arrow="horizontal" onClick={() => this.props.navigation.navigate('Language')}>{I18n.t('language')}</Item>
        </List>
        <WhiteSpace size="lg" />
        <List>
          <Item thumb={this._renderListItemIcon('about1', '#fc3')} arrow="horizontal" onClick={() => this.props.navigation.navigate('About')}>{I18n.t('about')}</Item>
        </List>
      </View>
    )
  }

  _getUserInfo() {
    ajax({
      url: 'user_login.json'
    }).then(res => {
      this.setState({
        user: res.data.user
      })
    })
  }

  _renderUserAvatar() {
    return (
      <Image
        style={styles.userAvatar}
        source={{ uri: this.state.user.avatar_url }}
      />
    )
  }

  _renderListItemIcon(name, color) {
    return (
      <Text style={[styles.itemIcon, { color }]}>{IconfontConf(name)}</Text>
    )
  }
}

const styles = StyleSheet.create({
  infoName: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  infoLocation: {
    marginBottom: 10,
  },
  itemIcon: {
    fontSize: 24,
    fontFamily: 'iconfont',
    marginRight: 10,
    marginTop: 3
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  }
})
