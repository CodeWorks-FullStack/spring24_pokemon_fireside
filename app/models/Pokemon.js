export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img

    if (!this.img) {
      this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
    }

    console.log('its nice to meet you ', this.name)
  }

  get PokemonTemplate() {
    return `
      <div><img src="${this.img}" alt="${this.name}"></div>
    `
  }


}
