import HoverRevealImage from "../common/HoverRevealImage";
import "./CharacterPortrait.css";

const SKILL_GLITCH_SLICES = [
  { top: 60, duration: "2.3s", delay: "-0.4s" },
  { top: 160, duration: "3.1s", delay: "-1.6s" },
  { top: 280, duration: "2.7s", delay: "-0.9s" },
  { top: 400, duration: "3.4s", delay: "-2.2s" },
  { top: 520, duration: "2.5s", delay: "-1.1s" },
];

function CharacterPortrait() {
  return (
    <div className="character">
      <div className="skill">
        <img src="images/character-skill.png" alt="" />
        {SKILL_GLITCH_SLICES.map((slice, index) => (
          <span
            key={index}
            className="skill-glitch-slice"
            style={{
              top: slice.top,
              backgroundPosition: `left -${slice.top}px`,
              animationDuration: slice.duration,
              animationDelay: slice.delay,
            }}
          />
        ))}
      </div>
      <HoverRevealImage
        className="character-clip"
        baseSrc="images/character-renoa-1.png"
        revealSrc="images/character-renoa-2.png"
        alt="Renoa"
        radius={260}
      />
      <div className="ob_01">
        <img className="petal petal-4" src="images/character-petal-4.png" alt="" />
        <img className="petal petal-3" src="images/character-petal-3.png" alt="" />
        <img className="petal petal-2" src="images/character-petal-2.png" alt="" />
      </div>
    </div>
  );
}

export default CharacterPortrait;
