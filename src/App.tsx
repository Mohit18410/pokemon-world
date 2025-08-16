import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import Home from "./Pages/Home/Home";
import ExplorePokeworld from "./Pages/Explore/ExplorePokeworld";
import Contact from "./Pages/Contact/Contact";
import { AppContext } from "./context/AppContext";
import { Header } from "./Molecules/Header";
import Footer from "./Molecules/footer/Footer";

function App() {
  const { getPokemonData } = useContext(AppContext);

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <>
      {/* <ScrollToTop /> */}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/explorePokeworld" element={<ExplorePokeworld />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/logIn" element={<Log />} />
        <Route path="/signUp" element={<Sign />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
