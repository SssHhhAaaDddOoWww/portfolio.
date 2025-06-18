// components/TypedText.tsx
"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: ["hi i am Dishant.", "i build full stack  web-apps.", ],
        typeSpeed: 20,
        backSpeed: 20,
        loop: true,
      });
    }

    return () => {
      typed.current?.destroy(); 
    };
  }, []);

  return <span ref={el} className=" font-bold text-xl" />;
}