import classes from "./product-details.module.css";

export default function ProductPrice({ price, discountPercentage }) {
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className={classes.price}>
      <div className={classes.finalPrice}>${discountedPrice.toFixed(2)}</div>
      <div className={classes.originalPrice}>
        ${price.toFixed(2)}
      </div>
      <div className={classes.discount}>-{discountPercentage}%</div>
    </div>
  );
}
