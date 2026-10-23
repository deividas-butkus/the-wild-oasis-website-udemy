import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 shrink-0">
      <Image
        src={logo}
        height="60"
        width="60"
        className="h-11 w-11 sm:h-[60px] sm:w-[60px]"
        quality={100}
        alt="The Wild Oasis logo"
        priority
      />
      <span className="hidden sm:inline text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
