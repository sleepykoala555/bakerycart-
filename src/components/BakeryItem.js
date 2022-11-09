import { useState } from "react";

// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {
    const item = props.item;
    const updateCart = props.updateCart;
    const cart = props.cart;
    const handleClick = () => {
        updateCart([...cart, item]); 
    }


    return (
        <div className = "item">
           <img src = {item.image}/>
           <p> {item.name} $ {item.price} </p>
           <p> {item.description} </p>
           <p>  <button type="button" onClick={handleClick}>Add to cart</button> </p>
        </div>
    );
    
}
