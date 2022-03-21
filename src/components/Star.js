import ReactStars from "react-rating-stars-component";
import React from "react";

 

const Star = ({rate}) => {
  console.log(rate)
    return (
      <div>
        <ReactStars
    count={5}
    value={rate}
    size={24}
    // activeColor="#ffd700"
    edit={false}

    />
      </div>
    );
   };
   export default Star;