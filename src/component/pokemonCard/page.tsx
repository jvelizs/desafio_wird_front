import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'
import { Pokemon } from '@/interfaces/interfaces';

interface PokemonCardProps{
    pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({pokemon}) => {
  return (
    <Link href={`pokemons/${pokemon.name}`}>
        <div className="card bg-base-100 shadow-xl">
            <div className="avatar">
            <div className="w-24 rounded">
                <Image
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                    width={96}
                    height={96}
                    priority
                />
            </div>
            </div>
        </div>
    </Link>
  )
}

export default PokemonCard