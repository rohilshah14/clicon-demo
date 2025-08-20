import Image from "next/image";
import classes from "./product-details.module.css";

export default function TabContent({ activeTab, product }) {
  if (activeTab === "info") {
    return (
      <div>
        <p>{product.sku}</p>
      </div>
    );
  }

  if (activeTab === "warranty") {
    if (!product?.warrantyInformation) {
      return <p className="loader"></p>;
    }
    if (product.warrantyInformation) {
      return (
        <div className={classes.bigText}>{product.warrantyInformation}</div>
      );
    }
    return <p className="error">No warranty information available</p>;
  }

  if (activeTab === "QR") {
    return product?.meta?.qrCode ? (
      <Image
        src={product.meta.qrCode}
        width={300}
        height={300}
        alt="qr-image"
        className={classes.qrImg}
      />
    ) : (
      <p className="loader"></p>
    );
  }

  if (activeTab === "reviews") {
    return (
      <div className={classes.main}>
        {product.reviews.map((review, id) => (
          <ul key={id}>
            <li>
              <span>Rating:</span> {review.rating}
            </li>
            <li>
              <span>Reviewer: </span>
              {review.reviewerName}
            </li>
            <li>
              <span>Comment: </span>
              {review.comment}
            </li>
            <li>
              <span>Date: </span>
              {new Date(review.date).toLocaleDateString()}
            </li>
          </ul>
        ))}
      </div>
    );
  }

  return null;
}
