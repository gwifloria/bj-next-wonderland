"use client";
import { isNumber } from "lodash";
import { useRef, useState, useLayoutEffect, useMemo } from "react";

export const JumpingFlags = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();

  const rnd = (m: number, n: number) => {
    m = isNumber(m) ? m : parseInt(m);
    n = isNumber(n) ? n : parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  };

  useLayoutEffect(() => {
    if (domRef.current) {
      setWidth(domRef.current.offsetWidth);
    }
  }, [domRef]);

  const renderChildren = useMemo(() => {
    if (!width) {
      return <></>;
    }
    const count = Math.floor((width / 50) * 8);
    const numArray = new Array(count).fill(0);
    return numArray.map((_i, index) => (
      <span
        key={index}
        className={`particle c${rnd(1, 2)}`}
        style={{
          top: `${rnd(10, 50)} %`,
          left: `${rnd(0, 100)}%`,
          width: `${rnd(7, 9)}px`,
          height: `${rnd(3, 4)}px`,
          animationDelay: `${rnd(0, 30) / 10}s`,
        }}
      ></span>
    ));
  }, [width]);
  return (
    <span
      ref={domRef}
      className="text confetti text-2xl sm:text-4xl md:text-6xl"
    >
      WELCOME TO My&lsquo;FANTASY ISLAND
      {renderChildren}
    </span>
  );
};
