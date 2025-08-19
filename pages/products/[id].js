import { useRouter } from "next/router";
import SeoHead from "../../components/SeoHead";
import { getProductById } from "../../services/service";
import ProductDetail from "../../components/Product-details/product-details";

export default function Details({ product }) {
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
      <div>{product.title}</div>
      <ProductDetail product={product} />
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
