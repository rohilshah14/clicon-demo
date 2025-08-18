import { useRouter } from "next/router";
import SeoHead from "../../components/SeoHead";
import { getProductById } from "../../services/service";

export default function ProductDetail({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <SeoHead title={product.title} description={product.description} />

      <div className="container">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <div style={{ margin: "20px 0" }}>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ maxWidth: "300px", borderRadius: "8px" }}
          />
        </div>

        <h2>${product.price}</h2>
        {product.discountPercentage && (
          <p style={{ color: "red" }}>
            Discount: {product.discountPercentage}%
          </p>
        )}
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const product = await getProductById(id);

    return {
      props: { product },
    };
  } catch (error) {
    return {
      props: { product: null },
    };
  }
}
