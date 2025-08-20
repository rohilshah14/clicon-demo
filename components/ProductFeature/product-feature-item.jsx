import classes from "./product-feature.module.css";
import Image from "next/image";

export default function ProductFeatureItem(props) {
  const { title, feature, id, image } = props;

  return (
    <li>
      <div>
        <Image src={"/" + image} alt={title} width={40} height={40} />
      </div>
      <div className={classes.content}>
        <p>{title}</p>
        <p>{feature}</p>
      </div>
    </li>
  );
}
