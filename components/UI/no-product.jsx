import classes from "./no-product.module.css";
import Image from "next/image";
import Button from "./button";

export default function NoProduct() {
  return (
    <div className={classes["no-product"]}>
      <Image
        src="/images/no-product.png"
        width={600}
        height={600}
        alt="no-product"
        className="img"
      />
      <Button name="Go back" left={true} right={false} cart={false} href="/"/>
    </div>
  );
}
