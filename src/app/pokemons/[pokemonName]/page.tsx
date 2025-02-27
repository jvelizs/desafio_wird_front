import BackButton from '@/component/backButton/page';
import DataBlock from '@/component/dataBlock/page'
import PokemonButton from '@/component/pokemonButton/page';
import ReadyToFight from '@/component/sidebar/page';
import { GestPokemonsDataByName } from '@/lib/PokemonApi'
import React from 'react'

// Página del estilo /pokemon/[nombre_pokemon]
const pokemonPage = async ({ params }: { params: Promise<{ pokemonName: string }> }) => {

  const { pokemonName } = await params;
  const pokemonData = await GestPokemonsDataByName(pokemonName); // Se carga la data del pokemon en especifico desde el lado del servidor

  return (
    <main className="h-screen flex bg-blue-200 relative">

      <div className="w-3/4 flex justify-center items-center relative">
        <div className="absolute top-0 left-0 p-4 z-10">
          <BackButton/> {/* Boton para volver a la pagina anterior */}
        </div>
        <div className="absolute top-0 right-0 p-4 z-10">
          <PokemonButton pokemon={pokemonData}/> {/* Boton para agregar/eliminar un pokemon en el sidebar */}
        </div>
        <div className="w-full max-w-4xl p-6">
          <DataBlock pokemonData={pokemonData} /> {/* Data del pokemon */}
        </div>
      </div>
      <div className="w-1/4 p-4 top-0 z-10"> 
        <ReadyToFight /> {/* sidebar fijo */}
      </div>
    </main>
  )
}

export default pokemonPage