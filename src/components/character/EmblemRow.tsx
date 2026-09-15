import "./EmblemRow.css";

const ACTIVE_EMBLEM_ID = "emblem_01";

const EMBLEMS = [
  { id: "emblem_01", src: "images/character-emblem-1.svg", label: "Renoa" },
  { id: "emblem_02", src: "images/character-emblem-2.svg", label: "Luke" },
  { id: "emblem_03", src: "images/character-emblem-3.svg", label: "Beryl" },
  { id: "emblem_04", src: "images/character-emblem-4.svg", label: "Lucas" },
  { id: "emblem_05", src: "images/character-emblem-5.svg", label: "Magna" },
];

function EmblemRow() {
  return (
    <div className="Frame-2078246060">
      {EMBLEMS.map((emblem) => {
        const isActive = emblem.id === ACTIVE_EMBLEM_ID;
        return (
          <button
            key={emblem.id}
            type="button"
            className={`emblem${isActive ? " is-active" : ""}`}
            style={{ WebkitMaskImage: `url(${emblem.src})`, maskImage: `url(${emblem.src})` }}
            aria-label={emblem.label}
            aria-pressed={isActive}
          />
        );
      })}
    </div>
  );
}

export default EmblemRow;
