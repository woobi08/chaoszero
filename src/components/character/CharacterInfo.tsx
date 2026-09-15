import TypewriterText from "../common/TypewriterText";
import "./CharacterInfo.css";

const BIO_LINES = [
  "테라시온 SS 저스티티아 소속의 엘리트 요원으로,",
  "언제나 차분하고 냉철한 모습을 유지한다.",
  " '검은 장미의 시인'이라 불리며 시를 쓰는 것을 좋아하지만, 자신의 이야기는",
  "시를 통해서만 표현하려는 경향이 있다.",
  "강인함과 섬세함을 동시에 지닌 신비로운 분위기의 인물이다.",
];

function CharacterInfo() {
  return (
    <div className="Frame-2078246061">
      <h1 className="font-main-title">Renoa</h1>
      <TypewriterText
        as="p"
        className="font-sub-title_01"
        text="나는 흑요의 백조, 불행을 알리는 자. 당신은 그걸 감당할 수 있을까?"
        speed={45}
        startDelay={300}
        loopDelay={10000}
      />
      <div className="txt_box">
        <img src="images/character-txtbox.png" alt="" />
        <div className="font_body-2">
          {BIO_LINES.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterInfo;
