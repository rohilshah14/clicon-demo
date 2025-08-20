import Button from "../UI/button";
import classes from "./product.module.css";
import { useRef } from "react";

export default function ProductSearch({ categoryList, onSearch }) {
  console.log("Categories:", categoryList);

  const categoryRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const selectCategory = categoryRef.current.value;

    onSearch(selectCategory);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" ref={categoryRef}>
            {categoryList && categoryList.length > 0 ? (
              categoryList.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))
            ) : (
              <option value="">No categories available</option>
            )}
          </select>
        </div>
      </div>
      <button className="btn">Show More</button>
    </form>
  );
}
