import config from "../config/config";

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
