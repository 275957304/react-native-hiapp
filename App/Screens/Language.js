import React from 'react'
import {
  View
} from 'react-native'
import {
  List,
  Radio
} from 'antd-mobile'

const RadioItem = Radio.RadioItem

export default class LanguageScreen extends React.Component {
  static navigationOptions = {
    title: 'Language',
  }

  constructor(props) {
    super(props)
    this.state = {
      lang: 'en'
    }
  }

  onChange(value) {
    this.setState({
      lang: value,
    })
  }

  render() {
    const languages = [
      { value: 'en', label: 'English' },
      { value: 'zh', label: '简体中文' },
    ]

    return (
      <View>
        <List renderHeader={() => 'Languages'}>
          {languages.map(i => (
            <RadioItem key={i.value} checked={ this.state.lang === i.value } onChange={() => this.onChange(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
      </View>
    )
  }
}
