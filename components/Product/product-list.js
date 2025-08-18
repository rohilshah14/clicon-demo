import ProductItem from "./Product-item";
import classes from "./product.module.css";
import Link from "next/link";

export default function ProductList(props) {
    const {items, onClick} = props;
  return (
    <div className={classes.product}>
      <div className="container">
        <h2 className="h2">Featured Products</h2>
        <ul className={classes.list}>
          {items.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              discountPercentage={product.discountPercentage}
              image={product.images?.[0]}
              price={product.price}
            />
          ))}
        </ul>

        <div className={classes.cta}>
          {onClick ? (
            <button className="btn" onClick={onClick}>
              Show More
            </button>
          ) : (
            <Link href="/products" className="btn">
              Show More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
