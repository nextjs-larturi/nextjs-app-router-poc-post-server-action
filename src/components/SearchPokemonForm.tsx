'use client'

import { getPokemonByName } from '@/actions/get-pokemon'
import { useState } from 'react'

export default function SearchPokemonForm() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (pokemonName === '') return

    try {
      const response = await getPokemonByName(pokemonName)
      const pokemon = response.pokemon
      setPokemonData(pokemon)
    } catch (error) {
      console.error('Error fetching pokemon:', error)
    }
  }

  return (
    <form className='px-8 pt-6 pb-8 mb-4 min-w-[400px]' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='block text-white text-sm font-bold mb-2' htmlFor='textInput'>
          Ingresar nombre de pokemon
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='textInput'
          type='text'
          placeholder='ditto, bulbasaur, pikachu...'
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </div>
      <div className='flex items-center justify-center'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Buscar
        </button>
      </div>
      {pokemonData && (
        <div className='mt-10 flex justify-center flex-col'>
          <h2 className='text-md'>Id: {pokemonData.id}</h2>
          <h2 className='text-md'>Name: {pokemonData.name}</h2>
          <h2 className='text-md'>Weight: {pokemonData.weight}</h2>
          <h2 className='text-md'>Order: {pokemonData.order}</h2>
          <h2 className='text-md'>Base Experience: {pokemonData.base_experience}</h2>
        </div>
      )}
    </form>
  )
}
