import classes from "./product.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/button";

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
          <Button
            name="add to cart"
            left={false}
            right={false}
            cart={true}
            href="/products"
            style={{ display: "flex" }}
          />
        </div>
      </div>
    </li>
  );
}
