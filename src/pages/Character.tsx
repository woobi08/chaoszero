import { useEffect, useState } from "react";
import Gnb from "../components/common/Gnb";
import CharacterBg from "../components/character/CharacterBg";
import CharacterPortrait from "../components/character/CharacterPortrait";
import EmblemRow from "../components/character/EmblemRow";
import CharacterInfo from "../components/character/CharacterInfo";
import NavButtons from "../components/character/NavButtons";
import "./Character.css";

const STAGE_WIDTH = 1920;
const STAGE_HEIGHT = 1080;

function Character() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const nextScale = Math.min(
        window.innerWidth / STAGE_WIDTH,
        window.innerHeight / STAGE_HEIGHT,
        1,
      );
      setScale(nextScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      className="character-viewport"
      style={{ height: STAGE_HEIGHT * scale }}
    >
      <div
        className="character-stage"
        style={{ transform: `scale(${scale})` }}
      >
        <CharacterBg />
        <CharacterPortrait />
        <Gnb />
        <EmblemRow />
        <CharacterInfo />
        <NavButtons />
      </div>
    </div>
  );
}

export default Character;
