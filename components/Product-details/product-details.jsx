import ProductTabs from "./product-tab.jsx";
import ProductDetailHeader from "./product-details-header";
import classes from "./product-details.module.css";
import ProductLeft from "./product-left.jsx";
import ProductRight from "./product-right.jsx";

export default function ProductDetail({ product }) {
  return (
    <div className={classes.wrap}>
      <div className="container">
        <ProductDetailHeader {...product} />
        <div className={classes.content}>
          <ProductLeft title={product.title} images={product.images[0]} />
          <ProductRight {...product} />
        </div>
        <ProductTabs product={product} />
      </div>
    </div>
  );
}
