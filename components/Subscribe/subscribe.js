import classes from "./subscribe.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Subscribe() {
  const socials = [
    {
      href: "https://www.google.com",
      src: "/images/google.svg",
      alt: "Google",
    },
    {
      href: "https://www.amazon.com",
      src: "/images/amazon.svg",
      alt: "Amazon",
    },
    {
      href: "https://www.philips.com",
      src: "/images/philips.svg",
      alt: "Philips",
    },
    {
      href: "https://www.toshiba.com",
      src: "/images/toshiba.svg",
      alt: "Toshiba",
    },
    {
      href: "https://www.samsung.com",
      src: "/images/samsung.svg",
      alt: "Samsung",
    },
  ];
  return (
    <div className={classes["subscribe-wrap"]}>
      <div className="container">
        <div className={classes.subscribe}>
          <h3 className="h4">Subscribe to our newsletter</h3>
          <p>
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          <div className={classes.logos}>
            {socials.map(({ href, alt, src }) => (
              <Link href={href} key={alt}>
                <Image src={src} alt={alt} width={72} height={72} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
