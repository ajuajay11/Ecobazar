import React, { useEffect, useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/action";

const ProductFilter = ({
  categories,
  products,
  setFilteredProducts,
  allTags, stateCategory
}) => {
    const dispatch = useDispatch();
  const [category, setCategory] = useState(stateCategory);
  const [rating, setRating] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [desiredTags, setDesiredTags] = useState([]);
  useEffect(() => {
    applyFilters();
    console.log("desiredTags: ", desiredTags);
    return () => {
        // dispatch(addCategory(""))
      }
  }, [category, rating, priceRange, desiredTags]);


  
  const applyFilters = () => {
    let filteredProducts = products;

    // Apply category filter
    if (category !== "") {
      console.log("category: ", category);
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    // Apply rating filter
    if (rating.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        rating.includes(product.rating)
      );
    }

    // Apply price range filter
    filteredProducts = filteredProducts.filter(
      (product) =>
        Number(product.price.replace(/\$/g, "")) >= priceRange[0] &&
        Number(product.price.replace(/\$/g, "")) <= priceRange[1]
    );

    //Apply tags filter
    if (desiredTags.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.tags.some((tag) => desiredTags.includes(tag))
      );
    }
    // Update the state with the filtered products
    setFilteredProducts(filteredProducts);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleTagsChange = (e) => {
    console.log(e.target.value);
    if (!desiredTags.includes(e.target.value)) {
      e.target.style.backgroundColor = "green";
      setDesiredTags([...desiredTags, e.target.value]);
    } else {
      e.target.style.backgroundColor = "white";
      let newTags = desiredTags.filter((tag) => tag !== e.target.value);
      setDesiredTags(newTags);
    }
  };

  const handleRatingChange = (e) => {
    const selectedRating = parseInt(e.target.value);
    if (rating.includes(selectedRating)) {
      setRating(rating.filter((r) => r !== selectedRating));
    } else {
      console.log(e);
      setRating([...rating, selectedRating]);
    }
  };

  return (
    <div>
        <div>categories : {stateCategory}</div>
      <h3>Filter Options</h3>

      {/* Categories */}
      <div>
        <h4>Categories</h4>
        {categories.map((category) => (
          <label key={category.categoryText}>
            <input
              type="radio"
              name="category"
              value={category.categoryText}
              onChange={handleCategoryChange}
            />
            {category.categoryText}
          </label>
        ))}
      </div>

      {/* Rating */}
      <div>
        <h4>Rating</h4>
        {[1, 2, 3, 4, 5].map((ratingValue) => (
          <label key={ratingValue}>
            <input
              type="checkbox"
              value={ratingValue}
              onChange={handleRatingChange}
            />
            {ratingValue} stars
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <h4>Price Range</h4>
        <div className="PriceRangeDiv">
          <PriceRangeSlider setPriceRange={setPriceRange} />
        </div>
      </div>

      {/* popular tags */}
      <div>
        {allTags.map((tag, i) => (
          <button key={i} type="button" value={tag} onClick={handleTagsChange}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
