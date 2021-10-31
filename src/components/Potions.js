import React, {useState, useEffect} from "react";
import PotionsCard from "./PotionsCard";

function Potions(potions, requesting){


    return (
        <>
        <div className="Potion-img"
        style={{backgroundImage: `url('https://images.unsplash.com/uploads/1411901100260f56b39b9/ab70b250?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80')`,
        height: "400px"}}>
        </div>
        <div className="Potions">

        </div>
        {requesting ? <div></div> : potions.map(potion => <PotionsCard potion={potion}/>) } 
        </>
    )
};


export default Potions;