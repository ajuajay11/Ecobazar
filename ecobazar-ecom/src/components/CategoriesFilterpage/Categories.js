import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import FooterSection_All from '../footer/FooterSectionAll'
import Data from '../Data/Data'
import ProductFilter from './ProductFilter';
import PopularCategoryItems from '../homepage/popularCategories/PopularCategoryItems';
import { useDispatch, useSelector } from "react-redux";

export default function Categories() {
    const stateCategory = useSelector(state => state.category);

    const categories  = PopularCategoryItems;
    const allTags = [
        'healthy',
        'vegetarian',
        'energy',
        'organic',
        'vitamin C',
        'refreshing',
        'tropical',
        'delicious',
        'antioxidant',
        'snack',
        'fiber',
        'juicy',
        'sweet',
        'citrus',
        'summer',
        'tart',
        'exotic',
        'premium',
        'crunchy',
        'ripe',
        'fresh',
        'homemade',
        'guacamole',
      ];
    const [filteredProducts, setFilteredProducts] = useState(Data);

    useEffect(() => {
    }, [])
    

  return (
    <div className="App"> 
    <Header/>
    <div className="p-l-r">
    <ProductFilter stateCategory={stateCategory} categories={categories} products={Data} setFilteredProducts={setFilteredProducts} allTags={allTags}/>
<p>{filteredProducts.length}</p>
     {filteredProducts.map((d, i)=>(
        <p key={i}>{d.id}{d.category}</p>
     ))}
    </div>
   </div>
  )
}

