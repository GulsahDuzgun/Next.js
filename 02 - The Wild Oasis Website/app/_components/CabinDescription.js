"use client";
import { useState } from "react";

export function CabinDescription({ description }) {
  const [isShown, setShown] = useState(false);

  return (
    <span>
      {isShown ? description : description.slice(0, 50) + "..."}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setShown(!isShown)}
      >
        {isShown ? "Show less" : "Show more"}
      </button>
    </span>
  );
}
