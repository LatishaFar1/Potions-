import React, {useState, useEffect} from "react";

function PotionsCard({potion}){

return (
    <>
    <div className="card">
  {/* <img
    src="https://st2.depositphotos.com/1454700/5755/i/600/depositphotos_57557041-stock-photo-love-potion.jpg"
    class="card-img-top"
    alt="..."
  /> */}
  <div className="card-body">
    <h5 className="card-title">{potion.name}</h5>
    <a href="#!" className="btn btn-primary">Button</a>
  </div>
</div>

    </>
)
};

export default PotionsCard;