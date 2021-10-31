import React from "react";


function Order(){


    return (
        <>
        <h2>Need something out of stock? </h2>
        <h3>order below:</h3>
        <form className="order-form">
        <label>potion name </label>
            <input type="text"/>
            <br/>
        <label>what do you want it to do</label>
        <input type="text"/>
            <br/>
         <label>when you need it by</label>
         <input type="date"/>
         <button className="button2">Submit</button>
        </form>

    
        </>
    )
};


export default Order;