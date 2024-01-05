import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRangeSlider = ({setPriceRange}) => {
  const [range, setRange] = useState([0, 100]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };
  useEffect(() => {
    setPriceRange(range)
  }, [range])
  

  return (
    <div>
      <label>
        Price Range:
        <Slider
          range
          value={range}
          min={0}
          max={100}
          step={1}
          onChange={handleRangeChange}
        />
      </label>
      <div>price:<span> ${range[0]} - ${range[1]}</span></div>
     
    </div>
  );
};

export default PriceRangeSlider;
