import React, { useEffect, useState } from 'react';
import PriceRangeSlider from './PriceRangeSlider';

const ProductFilter = ({ categories, products, setFilteredProducts }) => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100 ]);
    useEffect(() => {
        applyFilters()
        console.log("priceRange: ", priceRange);
    }, [category, rating, priceRange])
    
  const applyFilters = () => {
    let filteredProducts = products;

    // Apply category filter
    if (category !== '') {
        console.log("category: ",category);
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    // Apply rating filter
    if (rating.length > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => rating.includes(product.rating)
      );
    }

    // Apply price range filter
    filteredProducts = filteredProducts.filter(
      (product) =>
    //   console.log(parseInt(product.price.replace(/\$/g, '')))
    Number(product.price.replace(/\$/g, '')) >= priceRange[0] && Number(product.price.replace(/\$/g, '')) <= priceRange[1]
    );

    // Update the state with the filtered products
    setFilteredProducts(filteredProducts);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);

  };

  const handleRatingChange = (e) => {
    const selectedRating = parseInt(e.target.value);
    if (rating.includes(selectedRating)) {
      setRating(rating.filter((r) => r !== selectedRating));
    } else {
      setRating([...rating, selectedRating]);
    }
  };

  return (
    <div>
      <h3>Filter Options</h3>

      {/* Categories */}
      <div>
        <h4>Categories</h4>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleCategoryChange}
            />
            {category}
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
        <div className='PriceRangeDiv'>
            <PriceRangeSlider setPriceRange={setPriceRange}/>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;