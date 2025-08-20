import { useState } from "react";
import Image from "next/image";
import classes from "./product-details.module.css";

export default function ProductLeft({ title, images }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={classes.left}>
      {loading && <p className="loader"></p>}

      <Image
        src={images}
        alt={title}
        width={616}
        height={584}
        className={`${classes.productImg} ${loading ? classes.hidden : ""}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
