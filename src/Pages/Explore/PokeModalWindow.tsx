import { FaHeart } from "react-icons/fa";
import Button from "@mui/material/Button";
import DataTab from "../Home/DataTab";

const PokeModalWindow = ({ pokemon }) => {
  const { name, species, sprite, types, abilities, baseStats } = pokemon;
  const { hp, attack, defense } = baseStats;

  const abilityArray = [];
  function abilitiesArray(abilities) {
    abilities.map((ability) => abilityArray.push(ability.name));
  }
  abilitiesArray(abilities);

  const textStyleClass = " text-lg lg:text-2xl sm:text-xl mb-2";

  return (
    <div className=" p-10 flex-horizontal-vertical flex-wrap bg-white">
      <div className="pokeimage min-w-max">
        <img src={sprite} alt="Not Found" />
      </div>
      <div>
        <div className=" text-3xl lg:text-5xl sm:text-4xl text-center mb-4">
          {name}
        </div>
        <div className={textStyleClass}>Species: {species}</div>
        <div className="text-lg lg:text-2xl sm:text-xl mb-2 flex-vertical">
          <div>Type :</div>
          <div>
            <DataTab element={types} />
          </div>
        </div>
        <div className=" text-lg lg:text-2xl sm:text-xl mb-2 flex-vertical">
          <div>Abilities:</div>
          <div>
            <DataTab element={abilityArray} />
          </div>
        </div>
        <div className="flex-vertical justify-between">
          <div className={textStyleClass}>HP: {hp}</div>
          <div className={textStyleClass}>Attack: {attack}</div>
          <div className={textStyleClass}>Defense: {defense}</div>
        </div>
        <div className="flex-vertical gap-5">
          <Button variant="contained" color="success" className=" h-10">
            Add To Collection
          </Button>
          <Button variant="outlined" color="error" className=" h-10 w-8">
            <FaHeart size={34} className=" fill-red-600" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PokeModalWindow;
