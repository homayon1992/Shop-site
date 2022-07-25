import React from 'react';
import Product from "./Product";
import "./Home.css"


function Home() {
    return (

        <div>
            <div className="home">

                <div className="home__container">

                    <img src="https://cdn.business2community.com/wp-content/uploads/2020/04/online-store-small-business-blog.png" alt="" className="home__image" />


                    <div className="home__row">  
                    <Product 
                        id= "125"
                        title= " MacBook Pro 14” and 16” "
                        price= {1999.5}
                        rating={5}
                        image="https://cdn01.zoomit.ir/2022/6/apple-macbook-air-m2-midnight.jpg"
                    />

                    <Product 
                        id= "126"
                        title= " Apple Watch Series 7 "
                        price= {399.2}
                        rating={5}
                        image="https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.slideshow-xlarge_2x.jpg"
                    />

                    <Product 
                        id= "127"
                        title= " iPad Pro, The ultimate iPad experience"
                        price= {799.9}
                        rating={3}
                        image="https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg"
                    />
                    </div>
               
       



                <div className="home__row">
                    <Product 
                        id = "123"
                        title="Bennett Mystic 15.6 inch laptop shoulder messenger sling office bag"
                        price= {11.96}
                        rating = {5}
                        image = "https://images.squarespace-cdn.com/content/v1/548ec3bee4b068057bfb6db7/1555524366324-VWFSC5FC2C2D9IP7XCP7/image-asset.jpeg?format=1500w"
                    />
                    
                    <Product 
                        id= "124"
                        title= "Bag"
                        price= {239.5}
                        rating= {5}
                        image="https://viatravelers.com/wp-content/uploads/2021/01/KROSER-travel-Tote-bag-1024x771.jpg.webp"
                    />  
                </div>


                <div className="home__row">
                    <Product 
                        id= "128"
                        title= "WAHL PROFESSIONAL - Cordless Magic Clip Black"
                        price= {239.5}
                        rating={5}
                        image="https://cdn.shoplightspeed.com/shops/644714/files/32231740/650x650x2/wahl-professional-cordless-magic-clip-black-gold-0.jpg"
                    />
                
                    <Product 
                        id= "129"
                        title= "BaByliss Pro GOLDFX BOOST"
                        price= {484.99}
                        rating={5}
                        image="https://cdn11.bigcommerce.com/s-g57ea8t37g/products/4248/images/15476/boostdtrio__19213.1653091691.500.750.jpg?c=2"
                    />

                </div>
             
                </div>
            </div>
        </div>
    );
}

export default Home