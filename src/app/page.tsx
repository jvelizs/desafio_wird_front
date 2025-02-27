import PokemonList from "@/component/PokemonTab/page";
import SearchBar from "@/component/searchbar/page";
import ReadyToFight from "@/component/sidebar/page";

//Pag Home encargada de renderizar los componentes principales
export default function Home() {
  return (
    <main className="h-screen flex bg-blue-200">
      <div className="w-3/4 flex flex-col">
        <div className="w-full max-w-4xl mx-auto sticky top-0 z-10 py-2">
          <SearchBar /> {/* Componente para la barra de búsqueda*/ }
        </div>

        <div className="flex-1 overflow-auto">
          <PokemonList /> {/* Componente para grilla que renderiza los pokemones */ }
        </div>
      </div>
      <div className="w-1/4 p-4"> 
        <ReadyToFight /> {/* Componente para sidebar con Pokemones listos para el combate */ }
      </div>
  </main>
  );
}
