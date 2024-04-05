import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { Pokemon } from '../models/Pokemon.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error(err)
    }
  }

  async editAccount(accountData) {
    const res = await api.put('/account', accountData)
    AppState.account = new Account(res.data)
  }


  async getMyPokemon() {
    const res = await api.get('api/pokemon')
    const myPokes = res.data.map(p => new Pokemon(p))
    AppState.myPokemons = myPokes
    // console.log('mypokes', AppState.myPokemons)
  }


}

export const accountService = new AccountService()
