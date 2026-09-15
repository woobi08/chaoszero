import "./Gnb.css";

const MENU_ITEMS = [
  { label: "캐릭터", href: "#character", isActive: true },
  { label: "세계관", href: "#world", isActive: false },
  { label: "게임소개", href: "#about", isActive: false },
];

function Gnb() {
  return (
    <header className="GNB">
      <div className="Header">
        <div className="Header-Left">
          <div className="ci-2">
            <img src="images/character-gnb-logo.png" alt="카오스 제로 나이트메어" />
          </div>
          <nav className="Menu">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`menu-item${item.isActive ? " is-active" : ""}`}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <button type="button" className="btn_start">
          <span className="btn_start-label">GAME START</span>
          <span className="btn_start-ticks" aria-hidden="true">
            {Array.from({ length: 11 }).map((_, index) => (
              <span key={index} className="btn_start-tick" />
            ))}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Gnb;
