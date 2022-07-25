import React from 'react';
import Product from "./Product";


function Home() {
    return (

        <div>
            <div className="home">

                <div className="home__container">

                    <img src="https://cdn.business2community.com/wp-content/uploads/2020/04/online-store-small-business-blog.png" alt="" className="home__image" />


                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                    </div>



                    <div className="home__row">
                        <Product />
                        <Product />
                    </div>


                    <div className="home__row">
                        <Product />
                        <Product />

                    </div>
             
                </div>
            </div>
        </div>
    );
}

export default Home