import "./CharacterBg.css";

function CharacterBg() {
  return (
    <div className="bg">
      {/* 01_bg: Ellipse 4(글로우) + Rectangle 21(틴트) - 캐릭터마다 컬러 베리에이션 예정 */}
      <div className="Ellipse-4" />
      <div className="Rectangle-21" />
      <div className="object">
        <img className="Group-54" src="images/character-object-group54.svg" alt="" />
        <img className="Group-55" src="images/character-object-group55.svg" alt="" />
      </div>
      <img className="Group-57" src="images/character-bottom-line.png" alt="" />
      <img className="pattern_bg" src="images/character-pattern-bg.svg" alt="" />
    </div>
  );
}

export default CharacterBg;
