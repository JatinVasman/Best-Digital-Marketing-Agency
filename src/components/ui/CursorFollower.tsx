"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Skip on mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Dot follows instantly — use transform (GPU-accelerated, no layout)
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;

      // Primary glow follows instantly
      document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
      document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
    };

    // Use event delegation — detect hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        cursor.classList.add("hovering");
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        cursor.classList.remove("hovering");
      }
    };

    // Animation loop for smooth cursor circle + trailing glow
    let raf: number;
    const animate = () => {
      // Circle follows with lag — GPU-accelerated transform
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;
      cursorPos.current.x += dx * 0.15;
      cursorPos.current.y += dy * 0.15;
      cursor.style.transform = `translate(${cursorPos.current.x - 12}px, ${cursorPos.current.y - 12}px)`;

      // Trail follows with more lag
      const tdx = mousePos.current.x - trailPos.current.x;
      const tdy = mousePos.current.y - trailPos.current.y;
      trailPos.current.x += tdx * 0.05;
      trailPos.current.y += tdy * 0.05;
      document.documentElement.style.setProperty(
        "--trail-x",
        trailPos.current.x + "px",
      );
      document.documentElement.style.setProperty(
        "--trail-y",
        trailPos.current.y + "px",
      );

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div className="cursor-glow-trail hidden md:block" />
      <div className="cursor-glow-bg hidden md:block" />
    </>
  );
}
