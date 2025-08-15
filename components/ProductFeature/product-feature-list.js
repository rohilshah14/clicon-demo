import ProductFeatureItem from "./product-feature-item";
import classes from "./product-feature.module.css"
export default function ProductFeatureList(props) {
  const { items } = props;

  return (
    <div className={classes.features}>
      <div className="container">
        <ul>
          {items.map((feature) => (
            <ProductFeatureItem
              key={feature.id}
              id={feature.id}
              title={feature.title}
              image={feature.image}
              feature={feature.feature}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
