import { AsyncStorage } from 'react-native'
import RNStorage from 'react-native-storage'

export default class Storage {
  constructor(size) {
    const storage = new RNStorage({
      size: size || 1000,
      storageBackend: AsyncStorage,
      defaultExpires: null,
    })
    global.storage = storage
  }
}
