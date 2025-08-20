import { useState } from "react";
import { useRouter } from "next/router";
import ProductList from "../../components/Product/product-list";
import SeoHead from "../../components/SeoHead.jsx";
import { getProductLimit, getCategories } from "../../services/service.jsx";
import ProductSearch from "../../components/Product/product-search.jsx";

export default function ProductPage({ productList, categoryList }) {
  const [products, setProducts] = useState(productList || []);
  const [skip, setSkip] = useState(productList?.length || 0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const router = useRouter();

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const newProducts = await getProductLimit({
      limit: 30,
      skip,
      select: "id,title,price,description,discountPercentage,images",
    });

    if (!newProducts || newProducts.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...newProducts]);
      setSkip((prev) => prev + 30);
    }
    setLoading(false);
  };

  const findCategoryHandler = (category) => {
    const fullPath = `/products/${category}`;
    router.push(fullPath);
  };

  return (
    <>
      <SeoHead
        title="Products"
        description="Browse a wide variety of products"
      />
      {loading && (
        <div className="loaderWrapper">
          <div className="loader"></div>
        </div>
      )}
      <div className="product-wrap">
        <ProductSearch
          categoryList={categoryList}
          onSearch={findCategoryHandler}
        />
        <ProductList items={products} onClick={hasMore ? loadMore : null} />
        <div>
          {loading && <p className="loader"></p>}
          {!hasMore && <p className="no-more">No more products available.</p>}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const productList = await getProductLimit({
    limit: 12,
    skip: 0,
    select: "id,title,price,description,discountPercentage,images",
  });

  const categoryList = await getCategories();

  return {
    props: {
      productList: productList || [],
      categoryList: categoryList || [],
    },
  };
}
