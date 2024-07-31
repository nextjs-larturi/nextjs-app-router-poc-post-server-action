'use server'

export const getPokemonByName = async (name: string = 'ditto') => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon: Pokemon = await response.json()

    return {
      ok: true,
      pokemon
    }
  } catch (error) {
    console.error(error)
    return {
      error: true,
      pokemon: null,
      message: 'Error fetching pokemon'
    }
  }
}
