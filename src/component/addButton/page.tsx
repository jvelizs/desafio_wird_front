'use client';
import { Pokemon } from '@/interfaces/interfaces';
import { setPokemonReadyToFight } from '@/store/Pokemonslice';
import { RootState } from '@/store/store';
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface AddButtonProps {
    pokemon: Pokemon,
}

const AddButton: FC<AddButtonProps>= ({pokemon}) => {
    const dispatch = useDispatch() // Dispatch para poder setear las variables de estado
    const PokemonReadyToFight = useSelector((state: RootState) => state.pokemon.pokemonReadyToFight) // Listado de los pokemones listo para el combate

    const HandleButtonAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation(); // Se detiene la propagación del estado para que no redireccione a los stats al clickear el boton de agregado
        if(!PokemonReadyToFight.filter((pokemonInlist) => pokemonInlist.id !== pokemon.id)){ // En caso de no estar agregar a la lista, otro no hace nada. (Mejora agregar un alert)
            dispatch(setPokemonReadyToFight(pokemon)) // Se agrega el pokemon a la lista en redux
        }
    };
    return (
        <button 
            className="absolute -top-2 z-10 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-blue-700 focus:outline-none"
            onClick={(event) => {
                HandleButtonAdd(event)
            }}>
            +
        </button>
    )
}

export default AddButton