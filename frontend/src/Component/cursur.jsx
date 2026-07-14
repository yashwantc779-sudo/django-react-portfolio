import React, { useEffect, useState } from "react";
import "./cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className="cursor-ring"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}