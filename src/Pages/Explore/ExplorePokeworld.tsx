import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/AppContext";

const ExplorePokeworld = () => {
  const dispatch = useDispatch();
  // const clickedPokemonData = useSelector((state) => state.pokemonClicked);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   dispatch(setPokemonClicked({}));
  // };

  // useEffect(() => {
  //   if (Object.keys(clickedPokemonData).length) {
  //     handleOpen();
  //   } else {
  //     setOpen(false);
  //   }
  // }, [clickedPokemonData]);

  const { pokemonData } = useContext(AppContext);
  return (
    <>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <AiOutlineClose
            size={20}
            className=" absolute top-2 right-2 fill-gray-400 hover:cursor-pointer"
            onClick={handleClose}
          />
          {Object.keys(clickedPokemonData).length ? (
            <PokeModalWindow pokemon={clickedPokemonData} />
          ) : (
            <div>No Data</div>
          )}
        </div>
      </Modal>
      <div className=" flex-horizontal flex-wrap gap-3">
        {pokemonData ? (
          pokemonData.map((pokemon, index) => {
            return <PokemonCard pokemon={pokemon} key={index} />;
          })
        ) : (
          <Spinner />
        )}
      </div> */}
    </>
  );
};

export default ExplorePokeworld;
