'use client';
import { Pokemon } from '@/interfaces/interfaces'
import { removePokemonReadyToFight } from '@/store/Pokemonslice'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

interface RestButtonProps {
    pokemonToRest: Pokemon
}

const RestButton: FC<RestButtonProps> = ({ pokemonToRest }) => {
    const dispatch = useDispatch() 
    

    const HandleButtonRest = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        dispatch(removePokemonReadyToFight(pokemonToRest)) // A diferencia se llama a la funcion definida en el slice para sacar al pokemon de la lista
    }


    return (
        <button 
            className="absolute z-10 -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-blue-700 focus:outline-none"
            onClick={(event) => {
                HandleButtonRest(event)
            }}>
            -
        </button>
    )
}

export default RestButton