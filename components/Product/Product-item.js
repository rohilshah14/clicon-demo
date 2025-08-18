import classes from "./product.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem(props) {
  const { title, image, id, description, price, discountPercentage } = props;
  const exploreProduct = `/products/${id}`;

  return (
    <li className={classes.item}>
      <Link href={exploreProduct}>
        <div className={classes.image}>
          <Image src={image} alt={title} width={316} height={288} />
        </div>

        <div className={classes.content}>
          <h5>{title}</h5>
          <p>{description}</p>
          <div className={classes.price}>${price}</div>
          <div className={classes.discount}> {discountPercentage}% OFF</div>
        </div>
      </Link>
    </li>
  );
}
