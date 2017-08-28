import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'
import { List, WhiteSpace } from 'antd-mobile'

import I18n from '../I18n'
import { ajax } from '../Network'

const Item = List.Item

export default class ProfileScreen extends React.Component {
  static navigationOptions = () => ({
    title: I18n.t('profile'),
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

  render () {
    return (
      <View>
        <WhiteSpace size="lg" />
        <List>
          <Item extra={this._renderUserAvatar()}>{I18n.t('global.avatar')}</Item>
          <Item extra={this.state.user.nick_name}>{I18n.t('global.nickName')}</Item>
        </List>
        <WhiteSpace size="lg" />
        <List>
          <Item extra={this._formatGender()}>{I18n.t('global.gender')}</Item>
          <Item extra={this.state.user.location}>{I18n.t('global.location')}</Item>
        </List>
      </View>
    )
  }

  _formatGender() {
    return this.state.user.gender === 'm' ? I18n.t('global.male') : I18n.t('global.female')
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
}

const styles = StyleSheet.create({
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 5
  }
})
