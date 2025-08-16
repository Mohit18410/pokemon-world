import { createSlice } from "@reduxjs/toolkit";

// Define the Pokemon state structure
interface Pokemon {
  id: number;
  name: string;
  // Add other properties based on your actual Pokemon data structure
  // For example:
  // type: string[];
  // image?: string;
  // stats?: object;
  // abilities?: string[];
}

// Define the state type - can be empty object or Pokemon
type PokemonState = Pokemon | Record<string, never>;

// Define the initial state
const initialState: any = {};

const ClickedPokemonSlice = createSlice({
  name: "pokemonClicked",
  initialState,
  reducers: {
    setPokemonClicked: ({
      state,
      action,
    }: {
      state: PokemonState;
      action: any;
    }) => {
      return action.payload;
    },
    // Optional: Add a reducer to clear the selected Pokemon
    clearPokemonClicked: () => {
      return {};
    },
  },
});

export const { setPokemonClicked, clearPokemonClicked } =
  ClickedPokemonSlice.actions;
export default ClickedPokemonSlice.reducer;
