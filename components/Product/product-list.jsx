import { useState } from "react";
import ProductItem from "./Product-item.jsx";
import classes from "./product.module.css";
import Link from "next/link";

export default function ProductList({ items, onClick }) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={classes.product}>
      <div className="container">
        <h2 className="h2">Featured Products</h2>
        
        <div className={classes.searchBox}>
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={classes.searchInput}
          />
        </div>

        <ul className={classes.list}>
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                discountPercentage={product.discountPercentage}
                image={product.images?.[0]}
                price={product.price}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>

        <div className={classes.cta}>
          {onClick ? (
            <button className="btn" onClick={onClick}>
              Show More
            </button>
          ) : (
            <Link href="/products" className="btn">
              Show More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

