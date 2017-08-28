import React from 'react'
import {
  View,
  Alert,
  Button,
  InteractionManager
} from 'react-native'
import {
  List,
  Radio
} from 'antd-mobile'

import Colors from '../Constants/Colors'
import I18n from '../I18n'

const RadioItem = Radio.RadioItem

export default class LanguageScreen extends React.Component {
  static navigationOptions({ navigation }) {
    const { params = {} } = navigation.state
    return {
      title: I18n.t('language'),
      headerRight: <Button title={I18n.t('global.save')} color={Colors.headerTintColor} onPress={() => params.handleSave()}/>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      lang: 'en'
    }
  }

  componentWillMount() {
    I18n.getLanguage().then(lang => {
      this.setState({
        lang
      })
    }, err => {
      // handle error
      console.log(err)
    })
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.setParams({ handleSave: this._save.bind(this) })
    })
  }

  render() {
    const languages = [
      { value: 'en', label: 'English' },
      { value: 'zh', label: '简体中文' },
    ]

    return (
      <View>
        <List renderHeader={() => I18n.t('language')}>
          {languages.map(i => (
            <RadioItem key={i.value} checked={ this.state.lang === i.value } onChange={() => this._onChange(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
      </View>
    )
  }

  _onChange(value) {
    this.setState({
      lang: value,
    })
  }

  _save() {
    I18n.setLanguage(this.state.lang)
    Alert.alert(I18n.t('needRestartApp'))
  }
}
