import Image from "next/image";

export default function Dado({ valor, size = 80 }) {
  return (
    <Image
      src={`/dado${valor}.png`}
      alt={`Dado ${valor}`}
      width={size}
      height={size}
    />
  );
}