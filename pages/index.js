import BannerSlider from "../components/Banner/banner";
import ProductFeatureList from "../components/ProductFeature/product-feature-list";
import Head from "next/head";
import { getProductFeature } from "../services/service";
import { useState, useEffect } from "react";
import Product from "../components/Product/product";

export default function HomePage() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    getProductFeature().then((data) => setFeatures(data));
  }, []);
  return (
    <>
      <Head>
        <title>Clicon - Home</title>
        <meta
          name="description"
          content="Find a lot of great products that allow you to evolve.."
        />
      </Head>
      <BannerSlider />
      <ProductFeatureList items={features} />
      <Product />
    </>
  );
}
