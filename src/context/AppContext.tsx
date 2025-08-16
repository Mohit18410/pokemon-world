import { createContext, useState } from "react";
import axios from "axios";

// Define the Pokemon data structure
interface Pokemon {
  id: number;
  name: string;
  // Add other properties based on your actual Pokemon data structure
}

// Define the context value type
interface AppContextType {
  pokemonData: any;
  setPokemonData: (data: Pokemon[]) => void;
  getPokemonData: () => void;
}

// Define props type for the provider
interface AppContextProviderProps {
  children: React.ReactNode;
}

// Create context with a default value
export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [pokemonData, setPokemonData] = useState<any>();

  function getPokemonData(): void {
    axios
      .get<{ data: any }>("http://localhost:3001/data/v1/pokeData")
      .then((res) => {
        setPokemonData(res.data.data);
      })
      .catch((error: any) => {
        console.log("Error in getting data:", error);
      });
  }

  const value: AppContextType = {
    pokemonData,
    setPokemonData,
    getPokemonData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
