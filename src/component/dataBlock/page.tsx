import { Pokemon } from '@/interfaces/interfaces'
import React, { FC } from 'react'
import Image from 'next/image';

interface DataBlockProps{
    pokemonData: Pokemon;
}

const DataBlock: FC<DataBlockProps> = ({ pokemonData }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src={pokemonData.sprites.other['official-artwork'].front_default}
            alt={pokemonData.name}
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-2xl font-bold capitalize">{pokemonData.name}</h1>
        <p className="text-gray-600 text-lg mt-2">
          Altura: <span className="font-semibold">{pokemonData.height} cm</span>
        </p>
        <p className="text-gray-600 text-lg">
          Número Pokédex: <span className="font-semibold">#{pokemonData.id}</span>
        </p>
  
        <div className="mt-4">
          <p className="text-lg font-semibold">Tipos:</p>
          <div className="flex justify-center gap-2">
            {pokemonData.types.map((type, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gray-200 text-sm font-medium"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
};

export default DataBlock