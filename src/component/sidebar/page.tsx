'use client'; 
import React from 'react'
import { Pokemon } from '@/interfaces/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import RestButton from '../restButton/page';
import PokemonCard from '../pokemonCard/page';



const ReadyToFight = () => {
    const PokemonReadyToFight = useSelector((state: RootState) => state.pokemon.pokemonReadyToFight) // Se obtiene a los pokemones listos para pelear
    return (
        <div className="flex justify-center bg-blue-300 h-full">
            <div className="p-6">
                <h1 className="text-3xl font-bold text-center mb-4">
                {PokemonReadyToFight.length > 0 ? "¡Listos para el combate!" : "Lista vacía, ningún pokemon agregado al equipo"} {/* Texto dinámico para el sidebar */}
                </h1>
                {PokemonReadyToFight.length > 0 ? (
                <div className="grid lg:grid-cols-2 gap-4">{/* Misma lógica que la grilla pero reducida, ya que solo pueden ser 6*/}
                    {PokemonReadyToFight.map((pokemon: Pokemon) => { {/* Se mapea la lista de pokemones */}
                    return (
                        <div key={pokemon.id} className="relative w-20">
                            <RestButton pokemonToRest={pokemon} /> {/* Se reemplaza el boton para agregar por el de resta */}
                            <PokemonCard pokemon={pokemon}/>
                            <div className="content-center w-20">
                                <h2>{pokemon.name}</h2>
                            </div>
                        </div>
                    );
                    })}
                </div>
                ) : (
                <div className="text-center text-gray-500 mt-6">
                    <p>No tienes pokemones listos para el combate. ¡Agrega hasta 6!</p> {/* Texto dinámico para el sidebar */}
                </div>
                )}
            </div>
        </div>

    )
}

export default ReadyToFight