import React from 'react';
import { FaHeart } from "react-icons/fa";

function Wishlist(props) {
    function changeColor() {
         
    }
    return (
        <FaHeart size={25} style={{position: 'absolute', right: 25, top: 10, zIndex: 1000}} onClick={changeColor} ></FaHeart>
    );
}

export default Wishlist;