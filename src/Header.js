import React from 'react';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider" ;




function Header() {

  const [{basket}, dispatch] = useStateValue();
  
  return (

      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <LocalConvenienceStoreRoundedIcon className="header__logoImage" fontSize="large" />
            <h2 className="header__logoTitle">OnShop</h2>
          </div>
        </Link>


        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <div className="nav__item">
                <span className="nav__itemLineOne">Hello Gust</span>
                <span className="nav__itemLineTwo">Sing In</span>
            </div>
            
            <div className="nav__item">
                <span className="nav__itemLineOne">Your</span>
                <span className="nav__itemLineTwo">Shop</span>
            </div>


            <Link to="/checkout" style={{ textDecoration: "none" }}>
              
              <div className="nav__itemBasket">
                <ShoppingBasketIcon />
                <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
              </div>
            </Link>
        </div>

      </div>     
    )
  }
  
export default Header