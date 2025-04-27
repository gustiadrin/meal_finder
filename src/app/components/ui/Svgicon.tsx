// components/ui/SvgIcon.tsx
import Image from "next/image";
import { type StaticImageData } from "next/image";

interface SvgIconProps {
  src: string | StaticImageData; // Ruta desde /public o import directa
  alt: string;
  size?: number;
  className?: string;
}

export const SvgIcon = ({ src, alt, size = 24, className }: SvgIconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
};
