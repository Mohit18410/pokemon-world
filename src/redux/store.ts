import { configureStore } from "@reduxjs/toolkit";
import ClickedPokemonSlice from "./slices/ClickedPokemonSlice";

export const store: any = configureStore({
  reducer: {
    pokemonClicked: ClickedPokemonSlice,
  },
});
