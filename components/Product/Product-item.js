import classes from "./product.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem(props) {
  const { title, image, id, description, price, discountPercentage } = props;
  const exploreProduct = `/products/${id}`;

  return (
    <li className={classes.item}>
      <div>
        <div className={classes.image}>
          <Image src={image} alt={title} width={316} height={288} />
        </div>

        <div className={classes.content}>
          <Link href={exploreProduct} className="h5 title">
            {title}
          </Link>
          <p>{description}</p>
          <div className={classes.price}>${price}</div>
          <div className={classes.discount}> {discountPercentage}% OFF</div>
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
      </div>
    </li>
  );
}
