'use client';
import { setSearchPokemon } from '@/store/Pokemonslice';
import { RootState } from '@/store/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const SearchBar = () => {
  const dispatch = useDispatch() // Se utiliza el distpach de redux para hacer el llamado a la funcion que setea variable de estado 
  const search = useSelector((state: RootState) => state.pokemon.searchTerm) // Variable de estado manejada por redux para la busqueda


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    dispatch(setSearchPokemon(value)) // Se setea variable de estado con lo escrito en el input
}
  return (
    <input 
        type="text" 
        placeholder="Busca tu Pokemon"
        value={search}
        className="input input-bordered w-full"
        onChange={handleSearchChange} 
    />
  )
}

export default SearchBar