import React, { useEffect, useState,useRef } from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/action";
import FooterLogo from './../homepage/images/Bannartwo.png'
import Data from "../Data/Data";
import { FaAngleDown,FaChevronDown } from "react-icons/fa";
import ratingfour from './../homepage/images/Rating_four.png'
import ratingfive from './../homepage/images/Rating_five.png'
import ratingthree from './../homepage/images/Rating_five.png'
import ratingtwo from './../homepage/images/Rating_five.png'
import ratingone from './../homepage/images/Rating_five.png'
import filterposter from './../homepage/images/filterposter.png'

const ProductFilter = ({
  categories,
  products,
  setFilteredProducts,
  allTags, stateCategory
}) => {
  let stars =[ratingone,ratingtwo,ratingthree,ratingfour,ratingfive ]

  const myRef = useRef();
  const itemRefs = useRef([]);

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
    if (category !== "" && category!=='allcategory') {
      // filteredProducts.map((filterprod, index)=>(
      //   // filterprod.category===category?itemRefs.current[index].checked=true:itemRefs.current[index].checked=false
      //   console.log(itemRefs[index])

      // ))
      itemRefs.current.forEach((itemRef, index) => {
        // Manipulate individual elements here using itemRef
        itemRef.value===category?itemRef.checked=true:itemRef.checked=false
        console.log(`Item ${index + 1} text:`, itemRef.value);
    });
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
    if (category==='allcategory' || !category) {
      console.log(myRef);
      myRef.current.checked=true;
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
      console.log("tags", filteredProducts);
    }
    // Update the state with the filtered products
    setFilteredProducts(filteredProducts);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    dispatch(addCategory(e.target.value))
  };
  const handleTagsChange = (e) => {
    if (!desiredTags.includes(e.target.textContent)) {
      e.target.style.backgroundColor = "green";
      setDesiredTags([...desiredTags, e.target.textContent]);
    } else {
      e.target.style.backgroundColor = "#808080";
      let newTags = desiredTags.filter((tag) => tag !== e.target.textContent);
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

  // dropdown section

  const [showCategories, setShowCategories] = useState(Array(4).fill(true)); // Change '3' to the number of dropdowns

  const handleCategoryToggle = (index) => {
    const updatedCategories = [...showCategories];
    updatedCategories[index] = !updatedCategories[index];
    setShowCategories(updatedCategories);
  };

  return (
    <div className="d-flex p-lr-20 f-col gp-10">
    {/* <div className="OtherPageHeroSection">
    <div>categories : { stateCategory}</div>
      <h3>Filter Options</h3>
    </div> */}
   

      {/* Categories */}
      <div className="AllCategories linethroughcategory d-flex f-col gp-5">
        <div onClick={() => handleCategoryToggle(0)} className="openAndcoletoggle d-flex s-btw">
            <h3 className="toggleheader">Categories</h3>
            <span><FaAngleDown /></span>
        </div>
        {showCategories[0] && (
        <div className="categoryDropdown f-col d-flex">
        <div className="p-b">
        <label className="d-flex gp-5">
            <input
            id="Green"
              type="radio"
              ref={myRef}
              name="category"
              value='allcategory'
              onChange={handleCategoryChange}
            />
            <div className="t-t-c catnamebytoggle"> all category <span className="countcat">(200)</span></div>
        </label>
        </div>
        {categories.slice(0,7).map((category, index) => (
          <label className="d-flex gp-5" key={category.categoryText}>
            <div className="radiocat">
            <input
              ref={(element) => (itemRefs.current[index] = element)}
              type="radio"
              id="Green"
              name="category"
              value={ category.categoryText}
              onChange={handleCategoryChange}
            />
            </div>
            <div className="catnamebytoggle t-t-c">
             {category.categoryText} <span className="countcat">({category.categoryCount})</span>
            </div>
          </label>
        ))}
        </div>
       )}
      </div>

      {/* Rating */}
      <div className=" d-flex f-col gp-5 RatingCategories">
  <div onClick={() => handleCategoryToggle(1)} className="openAndcoletoggle d-flex s-btw">
    <h3 className="toggleheader">Rating</h3>
    <span><FaAngleDown /></span>
  </div>
  {showCategories[1] && (
    stars.map((ratingValue, i) => (
      <label className="checkboxstar catnamebytoggle d-flex gp-5" key={i}>
        <input
          type="checkbox"
          value={i+1}
          onChange={handleRatingChange}
        />
        <img className="" src={ratingValue} /> stars
      </label>
    ))
  )}
      </div>

      

      {/* Price Range */}
      <div className="d-flex f-col gp-5 PricingRangeCategories">
  <div onClick={() => handleCategoryToggle(2)} className="openAndcoletoggle d-flex s-btw">
    <h3 className="toggleheader">Price Range</h3>
    <span><FaAngleDown /></span>
  </div>
  {showCategories[2] && (
    <div>
      <div className="PriceRangeDiv">
        <PriceRangeSlider setPriceRange={setPriceRange} />
      </div>
    </div>
  )}
</div>

      {/* popular tags */}
     <div className="Populattags d-flex f-col gp-5 PopularTagsCategories">
  <div onClick={() => handleCategoryToggle(3)} className="openAndcoletoggle d-flex s-btw">
            <h3 className="toggleheader">Tags</h3>
            <span className="tagele"><FaAngleDown /></span>
        </div>
  <div className="grid-container">
    {showCategories[3] && (
      allTags.slice(1, 14).map((tag, i) => (
        <div key={i} className="Populattagsbutton" onClick={handleTagsChange}>
          {tag}
        </div>
      ))
    )}
  </div>
     </div>
      
      {/* 75 % number ofdiscounts */}

      <div className=" d-flex f-col gp-5 numberofdiscounts">
        <img width='260px' className="" src={filterposter} />
      </div>

    {/* // sale of product in all category page */}

    <div className="Saleofproduct f-col d-flex ">
  {Data.slice(0, 3).map((e) => (
    <div className="d-flex gp-10 threeprod s-btw" key={e.id}>
    <div className="d-flex threeprodone b-shadow s-btw">
      <div className="p-img">
        <img  src={e.pimg} alt="Product" />
      </div>
      <div className="p-contents d-flex">
        <div className="p-nameAndprice">
          <span>{e.pname}</span>
          <div>
            <span className="price">{e.price}</span>{" "}
            <span className="discount line-thr">{e.price}</span>
          </div>
          <img className="star" src={e.starImg} alt="Rating" />
        </div>
      </div>
    </div>
  </div>
  ))}
</div>


    </div>


    
  );
};

export default ProductFilter;
