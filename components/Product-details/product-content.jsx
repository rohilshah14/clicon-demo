import classes from "./product-details.module.css";
export default function ProductContent(props) {
  return (
    <ul className={classes.list}>
      <li>
        Sku: <span>{props.sku}</span>
      </li>
      <li>
        Availabiliy:{" "}
        <span className={classes.green}>{props.availabilityStatus}</span>
      </li>
      {props.branch && props.branch > 0 && (
        <li>
          Brand: <span>{props.brand}</span>
        </li>
      )}
      <li>
        Category:: <span>{props.category}</span>
      </li>
      <li>
        Stock:: <span>{props.stock}</span>
      </li>
      <li>
        Weight: <span>{props.weight}</span>
      </li>
      {props.tags && props.tags.length > 0 && (
        <li>
          Tags: <span>{props.tags.join(", ")}</span>
        </li>
      )}
    </ul>
  );
}
