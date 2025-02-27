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
    const dispatch = useDispatch()
    const PokemonReadyToFight = useSelector((state: RootState) => state.pokemon.pokemonReadyToFight)

    const HandleButtonAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if(!PokemonReadyToFight.includes(pokemon)){
            dispatch(setPokemonReadyToFight(pokemon))
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