import { useEffect, useRef } from "react";
import "./HoverRevealImage.css";

type HoverRevealImageProps = {
  /** 기본으로 보이는 이미지 */
  baseSrc: string;
  /** 마우스 스포트라이트로 드러나는 이미지 */
  revealSrc: string;
  alt?: string;
  /** 스포트라이트 반경(px). 페이지 스케일과 무관하게 이미지 자체 좌표 기준 */
  radius?: number;
  /** 래퍼 div에 적용할 클래스명 (위치/크기는 이 클래스의 CSS로 제어) */
  className?: string;
};

const DEFAULT_RADIUS = 260;

function HoverRevealImage({
  baseSrc,
  revealSrc,
  alt = "",
  radius = DEFAULT_RADIUS,
  className,
}: HoverRevealImageProps) {
  const revealRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateMask = (clientX: number, clientY: number) => {
      const reveal = revealRef.current;
      if (!reveal) return;

      // getBoundingClientRect()는 부모의 CSS transform(scale)까지 반영된 화면상 크기,
      // offsetWidth는 transform 이전(레이아웃 기준) 크기 — 둘의 비율로 현재 스케일을 역산한다.
      const rect = reveal.getBoundingClientRect();
      const scale = rect.width / reveal.offsetWidth;
      const x = (clientX - rect.left) / scale;
      const y = (clientY - rect.top) / scale;

      const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px, #fff 0%, #fff 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, transparent 100%)`;
      reveal.style.setProperty("-webkit-mask-image", mask);
      reveal.style.maskImage = mask;
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateMask(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updateMask(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [radius]);

  return (
    <div className={className}>
      <img src={baseSrc} alt={alt} />
      <img ref={revealRef} className="hover-reveal-image__layer" src={revealSrc} alt="" />
    </div>
  );
}

export default HoverRevealImage;
