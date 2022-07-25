import React from "react";


function Product() {
    return ( 
        <div className="product">
            <div className="product__info">
                <p> iPad Pro, The ultimate iPad experience</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>790</strong>
                </p>
                <div className="product__rating">⭐⭐⭐⭐</div>
            </div>



            <img src="https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg" />


            <button>Add to basket</button>
        </div>
    )
}

export default Product