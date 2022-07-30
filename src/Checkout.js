import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider" ;


function Checkout() {

    const [{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://t3.ftcdn.net/jpg/02/11/28/00/360_F_211280049_g8nsjnEXE2383rW14OQ64Rg2WPANojKK.jpg" alt="" className="checkout__ad" />
            
                <div>
                    <h2 className="checkout__title"> your Shopping Bascket</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct 
                        id= {item.id}
                        title= {item.title}
                        image= {item.image}
                        price= {item.price}
                        rating= {item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}


export default Checkout