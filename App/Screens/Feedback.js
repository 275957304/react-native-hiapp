import React from 'react'
import {
  View,
  Button,
  InteractionManager,
  Alert
} from 'react-native'

import Colors from '../Constants/Colors'
import I18n from '../I18n'
import Editor from '../Components/Editor'

export default class FeedbackScreen extends React.Component {
  static navigationOptions({ navigation }) {
    const { params = {} } = navigation.state
    return {
      title: I18n.t('feedback'),
      headerRight: <Button title={I18n.t('global.send')} color={Colors.headerTintColor} onPress={() => params.handleSave()}/>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.setParams({ handleSave: this._save.bind(this) })
    })
  }

  render() {
    return (
      <View>
        <Editor
          enableTools={'emotion'}
          onChangeText={this._onChangeText.bind(this)}
          placeholder={I18n.t('feedbackPlaceholder')}
          text={this.state.text} />
      </View>
    )
  }

  _onChangeText(text) {
    this.setState({
      text
    })
  }

  _save() {
    this.setState({
      text: ''
    })
    Alert.alert('', I18n.t('feedbackResult'), [
      {text: I18n.t('global.cancel'), onPress: () => {}, style: 'cancel'},
      {text: I18n.t('global.ok'), onPress: () => this.props.navigation.goBack()},
    ])
  }
}
