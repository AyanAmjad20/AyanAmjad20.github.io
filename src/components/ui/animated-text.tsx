import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;   // ms before starting
  speed?: number;   // ms per char
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  speed = 50,
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // reset when text changes
    setDisplayText("");
    setCurrentIndex(0);

    // start after delay
    timeoutRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((i) => {
          if (i >= text.length) {
            if (intervalRef.current !== null) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return i;
          }
          // update displayed text in lockstep
          setDisplayText(text.slice(0, i + 1));
          return i + 1;
        });
      }, speed);
    }, delay);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, delay, speed]);

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}
