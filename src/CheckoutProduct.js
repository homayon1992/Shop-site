import React from "react";

function CheckoutProduct() {
    return (
        <div className="checkouProduct">
            <img src="https://cdn01.zoomit.ir/2022/6/apple-macbook-air-m2-midnight.jpg" alt="" className="checkout__ad" />

            <div className="checkoutproduct__info">
                <p className="checkoutProduct__titel">
                    MacBook Pro 14” and 16”
                </p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>20</strong>
                </p>


                <div className="checkoutProduct__rating">
                    ⭐⭐
                </div>

            </div>

        </div>
    )
}

export default CheckoutProduct