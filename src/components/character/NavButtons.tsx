import "./NavButtons.css";

function NavButtons() {
  return (
    <div className="btn">
      <button type="button" className="nav-btn" aria-label="이전 캐릭터">
        <span
          className="nav-btn__icon"
          style={{
            WebkitMaskImage: "url(images/character-arrow-left.svg)",
            maskImage: "url(images/character-arrow-left.svg)",
          }}
        />
      </button>
      <button type="button" className="nav-btn" aria-label="다음 캐릭터">
        <span
          className="nav-btn__icon"
          style={{
            WebkitMaskImage: "url(images/character-arrow-right.svg)",
            maskImage: "url(images/character-arrow-right.svg)",
          }}
        />
      </button>
    </div>
  );
}

export default NavButtons;
