import React from "react";

interface HamburgerMenuProps {
  size?: number;
  color?: string;
  glowColor?: string;
  animationDuration?: number;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  size = 24,
  color = "currentColor",
  glowColor = "rgba(255, 255, 255, 0.8)",
  animationDuration = 2.5,
}) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Barras del menú */}
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between"
        style={{
          height: `${size * 0.75}px`,
          width: `${size * 0.75}px`,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="relative w-full rounded-full overflow-hidden"
            style={{
              height: `${size * 0.125}px`, // 12.5% del tamaño
              backgroundColor: color,
              margin: `${size * 0.0625}px 0`, // Espaciado proporcional
            }}
          >
            {/* Efecto de brillo (pseudo-elemento) */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(
                  90deg,
                  transparent 0%,
                  ${glowColor} 50%,
                  transparent 100%
                )`,
                animation: `shine ${animationDuration}s infinite ease-in-out`,
                animationDelay: `${i * 0.2}s`, // Efecto escalonado
              }}
            />
          </div>
        ))}
      </div>

      {/* Definición de la animación en CSS-in-JS */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HamburgerMenu;
