import { useRouter } from "next/router";
import SeoHead from "../../components/SeoHead.jsx";
import { getProductById } from "../../services/service.jsx";
import ProductDetail from "../../components/Product-details/product-details.jsx";
import NoProduct from "../../components/UI/no-product.jsx";

export default function Details({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p className="loader"></p>;
  }
  if (!product) {
    return <NoProduct />;
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
