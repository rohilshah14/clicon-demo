import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";

export default function HeaderBottom() {
  const bottomSocials = [
    {
      src: "/images/ShoppingCartSimple.svg",
      alt: "YouTube",
    },
    {
      src: "/images/Heart.svg",
      alt: "Pinterest",
    },
    {
      src: "/images/User.svg",
      alt: "Reddit",
    },
  ];
  return (
    <div className={classes["header-bottom"]}>
      <div className="container">
        <div className={classes["header-content"]}>
          <Link href="/" className={classes["header-logo"]}>
            <Image
              src="/images/main-logo.svg"
              alt="main-logo"
              width={177}
              height={48}
              priority
            />
          </Link>
          <div className={classes["header-right"]}>
            {bottomSocials.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} width={32} height={32} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
