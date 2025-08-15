import config from "../config/config";
import PRODUCT_FEATURE from "../product-feature";

export async function getProducts() {
  try {
    const res = await fetch(`${config.Api.product_uri}`);
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
}

export async function getProductFeature() {
  return PRODUCT_FEATURE;
}
