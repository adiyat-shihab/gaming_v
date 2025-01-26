"use client";

import { useEffect, useState } from "react";

export function GlitchCounter({ timer = 200 }: { timer: number }) {
  const [numbers, setNumbers] = useState<string[]>(Array(10).fill("0"));
  const [positions, setPositions] = useState<number[]>(Array(10).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prev) =>
        prev.map(() => Math.floor(Math.random() * 10).toString()),
      );

      setPositions((prev) =>
        prev.map((pos) => ((pos + Math.random() * 20 - 10) % 40) - 20),
      );
    }, timer);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" font-mono text-sm  h-[20px] w-[80px] select-none">
      <div className="flex gap-1 text-red-500 font-bold">
        {numbers.map((num, i) => (
          <div key={i} className="relative w-[8px] h-[20px] ">
            <span
              className="absolute transition-transform duration-100  opacity-80"
              style={{
                textShadow: "0 0 8px rgba(239, 68, 68, 0.5)",
              }}
            >
              {num}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
