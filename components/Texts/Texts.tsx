import React, { useRef, useEffect, useState } from "react";

interface IntersectionEntry {
  isIntersecting: boolean;
  target: HTMLElement;
}

interface TextsPropsType {
  textData: string[];
}

const Texts = ({ textData }: TextsPropsType) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHighlightedIndex(entry.target.dataset.index);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      {textData.map((text, index) => (
        <div
          key={index}
          data-index={index}
          style={{
            padding: "10px",
            backgroundColor:
              highlightedIndex === String(index) ? "yellow" : "transparent",
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default Texts;
