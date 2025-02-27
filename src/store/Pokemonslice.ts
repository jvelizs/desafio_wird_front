import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '@/interfaces/interfaces';

// VARIABLE DE ESTADO
interface PokemonState { 
  pokemonList: Pokemon[]; 
  filteredList: Pokemon[];
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  pokemonReadyToFight: Pokemon[];
  status: string;
}

// ESTADO INICIAL DE LAS VARIABLES
const initialState: PokemonState = {
  pokemonList: [],
  filteredList: [],
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 30,
  pokemonReadyToFight: [],
  status: '',
};

// Función Asincrona que nos permite fetchear los pokemones en los componentes
export const fetchData = createAsyncThunk("data/fetch", async ({ limit, offset }: { limit: number; offset: number }) => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=' + limit +'&&offset=' + offset; //URL api poke.co para obtener los datos
  const response = await fetch(url); // Fetch para obtener la url de los pokemones a buscar
  const pokeResult = await response.json() // Resultado con el nombre y url de los pokemons
  const DataPokemons = await Promise.all(pokeResult.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url); //Fetch para retornar toda la data relacionada a los pokemones
      return await res.json(); 
  }));
  return DataPokemons; // Data completa
});

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemonList = action.payload; // Se seta la lista de pokemones completo
    },
    setSearchPokemon: (state, action: PayloadAction<string>) => { // Se setea el termino a buscar junto con la data filtrada
      state.searchTerm = action.payload;
      state.filteredList = state.pokemonList.filter((pokemon) => 
         pokemon.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },

    setPokemonReadyToFight: (state, action: PayloadAction<Pokemon>) => { // Se agrega a la lista de los pokemones listo para luchar
      if(state.pokemonReadyToFight.length < 6 && !state.pokemonReadyToFight.some((pokemon) => pokemon.id === action.payload.id)){
        state.pokemonReadyToFight =  [...state.pokemonReadyToFight, action.payload];
      }
    },

    removePokemonReadyToFight:(state, action: PayloadAction<Pokemon>) => { // se remueve de la lista de los pokemones listos para luchar
      state.pokemonReadyToFight = state.pokemonReadyToFight.filter((pokemon) => pokemon.id !== action.payload.id);
    },

    setPage: (state, action: PayloadAction<number>) => { // Se setea el numero de páginas
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => { //Se setea el item por páginas
      state.itemsPerPage = action.payload;
      state.currentPage = 1; // en caso de cambiar el item por paginas se resetea a la primera página.
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";  // Define el estado de carga de los datos en este caso cargando
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fullfilled"; // Define el estado de carga de los datos en este caso completo
        state.pokemonList = action.payload; // Setea los datos 
      });
  }
})

// Action creators are generated for each case reducer function
export const { setPokemonList, setSearchPokemon, setPokemonReadyToFight, removePokemonReadyToFight, setPage, setItemsPerPage} = pokemonSlice.actions

export default pokemonSlice.reducer