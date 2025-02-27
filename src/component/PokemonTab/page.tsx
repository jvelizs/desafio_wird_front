'use client';
import React, { useEffect } from 'react'
import { Pokemon } from '@/interfaces/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Pagination from '../pagination/page';
import AddButton from '../addButton/page';
import PokemonCard from '../pokemonCard/page';
import { useAppDispatch } from '@/hooks/PokemonHooks';
import { fetchData } from '@/store/Pokemonslice';


const PokemonList = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData({ limit: 30, offset: 0 })); // Con el fin de optimizar la grilla, se hace el fetch para los primeros 30 pokemones
  }, [dispatch]);// Para luego se vaya actualizando con la paginación

  const statusData = useSelector((state: RootState) => state.pokemon.status); // Variable de estado para el status de la data {Loading, fullfield}
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemonList); // Variable de estado para los pokemones a mostrar
  const searchTerm = useSelector((state: RootState) => state.pokemon.searchTerm); // Variable de estado para busqueda por medio del SearchBar
  const itemsPerPage = useSelector((state: RootState) => state.pokemon.itemsPerPage); // Variable de estado para los items por paginas definidos en redux

  // Función que filtra por los pokemones que en su nombre incluya el termino buscado.
  const filteredPokemon = pokemons.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Spinner para representar el estado de carga de los datos
  if (statusData === 'loading') {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Grilla con las cartas con los pokemones.

  return (
    <div className="justify-center">
      <div className="grid lg:grid-cols-5 p-6 sm:grid-cols-3 gap-4">
        {filteredPokemon.map((pokemon: Pokemon) =>{
          return (
          <div key={pokemon.id}  className="relative w-20">
            <AddButton pokemon={pokemon}/> {/* Botón para agregar a la lista Listos Para el combate */}
            <PokemonCard pokemon={pokemon}/> {/* Carta con el pokemon, la cual no redirecciona a sus stats */}
            <div className="content-center w-20">
              <h2>{pokemon.name}</h2>
            </div>
          </div>
          )
        })}
      </div>
      <Pagination totalItems={151} itemsPerPage={itemsPerPage} /> {/* Paginación, se entrega a la fuerza ya que se sabe que son 151, se puede dejar de forma dinamica */}
    </div>
  )
}

export default PokemonList