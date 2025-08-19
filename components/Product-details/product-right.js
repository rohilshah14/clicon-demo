import ProductContent from "./product-content";
import classes from "./product-details.module.css";
import ProductPrice from "./product-price";
import Link from "next/link";
import Image from "next/image";

export default function ProductRight(props) {
  return (
    <div className={classes.right}>
      <div className={classes.rating}>{props.rating} Star Rating</div>
      <h1 className="h2">{props.title}</h1>
      <h2 className="h6">{props.description}</h2>

      <ProductContent {...props} />
      <ProductPrice {...props} />

      <div className="cta">
        <Link href="/" className="btn" style={{ display: "flex" }}>
          Add to card
          <Image
            src="/images/ShoppingCartSimple.svg"
            width={24}
            height={24}
            alt="add-to-cart"
          />
        </Link>
      </div>
    </div>
  );
}
