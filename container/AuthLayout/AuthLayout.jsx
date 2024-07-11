import React, { useEffect, useRef } from "react";
import { AuthStyle } from "./AuthLayout.style";

const AuthLayout = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let startY;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Prevent scrolling up when already at the top
      if (scrollTop <= 0 && currentY > startY) {
        e.preventDefault();
      }

      // Prevent scrolling down when already at the bottom
      if (scrollTop + clientHeight >= scrollHeight && currentY < startY) {
        e.preventDefault();
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100dvh",
        padding: "0rem 0 3rem",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <AuthStyle>{children}</AuthStyle>
    </div>
  );
};

export default AuthLayout;