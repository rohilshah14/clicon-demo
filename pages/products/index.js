import { useState, useEffect } from "react";
import ProductList from "../../components/Product/product-list";
import SeoHead from "../../components/SeoHead";
import { getProductLimit } from "../../services/service";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    const newProducts = await getProductLimit({
      limit: 30,
      skip,
      select: "id,title,price,description,discountPercentage,images",
    });

    if (newProducts.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...newProducts]);
      setSkip((prev) => prev + 30);
    }

    setLoading(false);
  };

  return (
    <>
      <SeoHead
        title="Products"
        description="Browse a wide variety of products on Clicon. Discover the latest deals and top-rated items."
      />

      {loading && (
        <div className="loaderWrapper">
          <div className="loader"></div>
        </div>
      )}

      <div className="product-wrap">
        <ProductList items={products} onClick={hasMore ? loadMore : null} />

        <div>
          {loading && <p className="loader"></p>}
          {!hasMore && <p className="no-more">No more products available.</p>}
        </div>
      </div>
    </>
  );
}
