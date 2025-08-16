import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@Library/Theme/index.ts";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.tsx";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContextProvider>
        <ChakraProvider value={system}>
          <App />
        </ChakraProvider>
      </AppContextProvider>
    </Provider>
  </BrowserRouter>
);
