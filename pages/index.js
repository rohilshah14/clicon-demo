import BannerSlider from "../components/Banner/banner";
import ProductFeatureList from "../components/ProductFeature/product-feature-list";
import ProductList from "../components/Product/product-list";
import SeoHead from "../components/SeoHead";
import { getProductLimit, getProductFeature } from "../services/service";

export default function HomePage(props) {
  const { productList, features } = props;
  return (
    <>
      <SeoHead
        title="Home"
        description="Find a lot of great products on Clicon that help you evolve and improve your lifestyle."
      />

      <BannerSlider />
      <ProductFeatureList items={features} />
      <ProductList items={productList} />
    </>
  );
}

export async function getServerSideProps() {
  const productList = await getProductLimit({
    limit: 12,
    skip: 40,
    select: "title,price,description,discountPercentage,images",
  });

  const features = await getProductFeature();

  return {
    props: {
      productList,
      features,
    },
  };
}
