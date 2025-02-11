import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  /**@type {import('./models/Pokemon.js').Pokemon[]} */
  myPokemons = []

  /**@type {import('./models/Pokemon.js').Pokemon | null} */
  result = null

}

export const AppState = createObservableProxy(new ObservableAppState())