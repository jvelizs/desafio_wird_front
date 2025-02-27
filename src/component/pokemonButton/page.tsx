'use client';

import { Pokemon } from '@/interfaces/interfaces';
import { removePokemonReadyToFight, setPokemonReadyToFight } from '@/store/Pokemonslice';
import { RootState } from '@/store/store';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface PokemonButtonProps {
  pokemon: Pokemon;
}

const PokemonButton: FC<PokemonButtonProps> = ({ pokemon }) => {
  const PokemonReadyToFight = useSelector((state: RootState) => state.pokemon.pokemonReadyToFight);
  const dispatch = useDispatch();

  // Función que determina si el pokemon está en la lista
  const isInList = () => {
    return PokemonReadyToFight.some((pokemonInList) => pokemonInList.id === pokemon.id);
  };

  // Maneja el click en el botón
  const handleButtonAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Evita la propagación del evento
    if (isInList()) {
      // Si el pokemon está en la lista, lo eliminamos
      dispatch(removePokemonReadyToFight(pokemon));
    } else {
      // Si no está en la lista, lo agregamos
      dispatch(setPokemonReadyToFight(pokemon));
    }
  };

  return (
    <button className="btn btn-neutral btn-wide" onClick={handleButtonAdd}>
      {isInList() ? "Sacar del equipo" : "Agregar al equipo"}
    </button>
  );
};

export default PokemonButton;
