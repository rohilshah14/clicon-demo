import config from "../config/config";
import PRODUCT_FEATURE from "../product-feature";

export async function getProducts() {
  try {
    const res = await fetch(`${config.Api.product_uri}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
}

export async function getProductLimit({
  limit = 10,
  skip = 0,
  select = "title,price",
} = {}) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return (data.products || []).reverse();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
}

export async function getProductFeature() {
  return PRODUCT_FEATURE;
}
