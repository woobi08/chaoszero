import { useEffect, useState, type ElementType } from "react";
import "./TypewriterText.css";

type TypewriterTextProps = {
  text: string;
  /** 글자당 딜레이 (ms) */
  speed?: number;
  /** 시작 전 대기시간 (ms) */
  startDelay?: number;
  className?: string;
  /** 렌더링할 태그, 기본값 span */
  as?: ElementType;
  showCursor?: boolean;
  /** 타이핑 완료 후 이 시간(ms)만큼 대기했다가 처음부터 다시 재생. 지정하지 않으면 한 번만 실행 */
  loopDelay?: number;
};

function TypewriterText({
  text,
  speed = 45,
  startDelay = 0,
  className,
  as: Tag = "span",
  showCursor = true,
  loopDelay,
}: TypewriterTextProps) {
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setCount(0);
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let loopTimeoutId: ReturnType<typeof setTimeout> | undefined;

    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          if (loopDelay !== undefined) {
            loopTimeoutId = setTimeout(() => setCycle((c) => c + 1), loopDelay);
          }
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
      if (loopTimeoutId) clearTimeout(loopTimeoutId);
    };
  }, [text, speed, startDelay, loopDelay, cycle]);

  return (
    <Tag className={className}>
      {text.slice(0, count)}
      {showCursor && <span className="typewriter-cursor">|</span>}
    </Tag>
  );
}

export default TypewriterText;
