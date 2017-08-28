import {
  AppRegistry
} from 'react-native'
import App from './App'
import Storage from './Storage'

// Init storage
new Storage()

AppRegistry.registerComponent('RNHiapp', () => App)
