// src/hooks/useScrollReveal.js
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = (configs) => {
  useEffect(() => {
    configs.forEach(({ selector, delay, origin }) => {
      ScrollReveal().reveal(selector, {
        delay,
        distance: "50px",
        origin,
        duration: 1000,
      });
    });
  }, [configs]);
};
