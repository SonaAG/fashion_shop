import React from "react";

interface ManMandirLogoProps {
  className?: string;
  size?: number; // width and height in px
  showBorder?: boolean;
}

export const ManMandirLogo: React.FC<ManMandirLogoProps> = ({
  className = "",
  size = 120,
  showBorder = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Colorful circular ring border mimicking the Instagram/gradient styled outline */}
        {showBorder && (
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3.5"
            className="opacity-90"
          />
        )}

        {/* Outer subtle divider ring */}
        {showBorder && (
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="white"
            stroke="#231F1C"
            strokeWidth="0.5"
            className="opacity-15"
          />
        )}

        {/* Main white background fill */}
        <circle cx="100" cy="100" r="91" fill="#FFFFFF" />

        {/* Decorative Arch/Dome Shape in Coral-Red */}
        <path
          d="M 50 100 C 50 45, 150 45, 150 100"
          fill="none"
          stroke="#E54D41"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* "Estd. 1994" Text inside the Arch */}
        <text
          x="100"
          y="56"
          textAnchor="middle"
          fill="#E54D41"
          fontSize="11"
          fontFamily="'Playfair Display', 'Didot', serif"
          fontWeight="500"
          letterSpacing="0.08em"
        >
          Estd. 1994
        </text>

        {/* "MAN" text (First line, stylized) */}
        <text
          x="100"
          y="110"
          textAnchor="middle"
          fill="#231F1C"
          fontSize="34"
          fontFamily="'Space Grotesk', 'Inter', sans-serif"
          fontWeight="700"
          letterSpacing="0.06em"
        >
          MAN
        </text>

        {/* "MANDIR" text (Second line, stylized) */}
        <text
          x="100"
          y="144"
          textAnchor="middle"
          fill="#231F1C"
          fontSize="30"
          fontFamily="'Space Grotesk', 'Inter', sans-serif"
          fontWeight="700"
          letterSpacing="0.04em"
        >
          MANDIR
        </text>

        {/* Border line separator */}
        <line
          x1="65"
          y1="158"
          x2="135"
          y2="158"
          stroke="#231F1C"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* "BRIDAL STUDIO" subtitle (Third line) */}
        <text
          x="100"
          y="178"
          textAnchor="middle"
          fill="#3D3732"
          fontSize="10"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          letterSpacing="0.16em"
        >
          BRIDAL STUDIO
        </text>

        {/* Definitions for gradients */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D93829" />
            <stop offset="40%" stopColor="#E54D41" />
            <stop offset="70%" stopColor="#C2185B" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
