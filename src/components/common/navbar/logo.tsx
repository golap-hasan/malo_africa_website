import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Malo Africa Logo"
        width={180}
        height={64}
        className="h-16 w-auto object-contain dark:invert hidden sm:flex"
        priority
      />
    </Link>
  );
};
