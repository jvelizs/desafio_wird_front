export async function GestPokemonsDataByName(name: string) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
    const pokeResult = await response.json();
    return pokeResult;
}