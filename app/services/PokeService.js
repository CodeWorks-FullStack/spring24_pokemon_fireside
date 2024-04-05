import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"

// @ts-ignore
const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})


class PokemonService {
  async find(search) {
    const res = await pokeapi.get(`pokemon/${search}`)
    const result = new Pokemon(res.data)
    AppState.result = result
  }

}

export const pokemonService = new PokemonService()