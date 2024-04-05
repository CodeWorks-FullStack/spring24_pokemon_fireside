import { AppState } from '../AppState.js';
import { accountService } from '../services/AccountService.js';
import '../services/PokeService.js';
import { pokemonService } from '../services/PokeService.js';
import { getFormData } from '../utils/FormHandler.js';
import { Pop } from '../utils/Pop.js';
import { setHTML } from '../utils/Writer.js';

function drawMyPokemons() {
  let template = ''

  AppState.myPokemons.forEach(p => template += p.PokemonTemplate)

  setHTML('myPokemons', template)
}

function drawResult() {
  setHTML('result', AppState.result.PokemonTemplate)
}



export class HomeController {
  constructor() {

    // 👂 I am listening for a data change 
    AppState.on('account', accountService.getMyPokemon)
    AppState.on('myPokemons', drawMyPokemons)
    AppState.on('result', drawResult)
  }

  async find() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      console.log(formData)
      await pokemonService.find(formData.search)
      // @ts-ignore
      form.reset()
    } catch (e) {
      Pop.error('That is not a known pokemon, silly 🐼')
    }
  }

}
