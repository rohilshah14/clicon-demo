import ProductContent from "./product-content.jsx";
import classes from "./product-details.module.css";
import ProductPrice from "./product-price.jsx";
import Button from "../UI/button.jsx";

export default function ProductRight(props) {
  return (
    <div className={classes.right}>
      <div className={classes.rating}>{props.rating} Star Rating</div>
      <h1 className="h2">{props.title}</h1>
      <h2 className="h6">{props.description}</h2>

      <ProductContent {...props} />
      <ProductPrice {...props} />

      <Button
        name="Add to cart"
        left={false}
        right={false}
        cart={true}
        href="/products"
        style={{ display: "flex" }}
      />
    </div>
  );
}
