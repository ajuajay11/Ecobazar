import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import FooterSection_All from '../footer/FooterSectionAll'
import Data from '../Data/Data'
import ProductFilter from './ProductFilter';

export default function Categories() {
    const categories =["fruit", "vegetable", "snack"]
    // const [category, setCategory] = useState("vegetable");
    const [filteredProducts, setFilteredProducts] = useState(Data);

    useEffect(() => {
    }, [])
    

  return (
    <div className="App"> 
    <Header/>
    <div className="p-l-r">
    <ProductFilter categories={categories} products={Data} setFilteredProducts={setFilteredProducts}/>

     {filteredProducts.map((d, i)=>(
        <p key={i}>{d.id}{d.category}</p>
     ))}
    </div>
   </div>
  )
}

