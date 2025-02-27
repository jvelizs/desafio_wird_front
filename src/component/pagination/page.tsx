'use client';

import { fetchData, setPage } from '@/store/Pokemonslice';
import { RootState } from '@/store/store';
import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/PokemonHooks';


interface PaginationProps{
    totalItems: number;
    itemsPerPage: number;
}

const Pagination: FC<PaginationProps> = ({totalItems, itemsPerPage}) => {
    
    const dispatch = useAppDispatch(); // Se usa useAppDispatch con el fin de poder fetchear la data en caso de pasar a la página siguiente
    const currentPage = useSelector((state: RootState) => state.pokemon.currentPage); // Variable de entorno con la página actual

    const totalpages = Math.ceil(totalItems / itemsPerPage); // Para calcular el número de paginas totales

    const pageButtons = Array.from({length: totalpages}, (_, i) => i + 1) // Array con los numeros de los botones

    const HandleBotonNav = (page: number) =>{
        dispatch(setPage(page)); // Se setea el currentPage
        let limit = itemsPerPage; // Siento el limite de items por pagina
        const offset = limit * (page-1); // Se calcula el offset para la consulta a la api, con esto podemos decir que queremos los 30 siguientes.
        if(offset >= 150 ){ // En caso de que el offset sea mayor o igual a 150
            limit = 1; // Devolvemos 1 para obtener al pokemon que nos falta al ser 151
        }
        dispatch(fetchData( {limit, offset} ))// Se llama a al fetchdata para setear los pokemones que se deben mostrar
    }

  return (
    <div className="flex justify-center mt-4">
        <div className="join">
            {pageButtons.map((page) => (
            <button
                key={page}
                className={`join-item btn ${currentPage === page ? 'btn-active' : ''}`}
                onClick={() => HandleBotonNav(page)}
            >
                {page}
            </button>
            ))}
        </div>
    </div>
  )
}

export default Pagination