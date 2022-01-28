import React from 'react'
import Button from "./Button/Button";
import {Link} from "react-router-dom";
const Header = ()=>{
    return (
        <div className="header">
            <div className="container">
                <Link to={'/'}>
                    <div className="header__logo">

                        <img className="continent__logo__img" src="http://www.shop.continent.kg/images/logo_trade.png"
                             alt="Continent-Trade logo"/>
                        <p>ОФИЦИАЛЬНЫЙ ПАРТНЁР HPE,HPI И XEROX В КЫРГЫЗСТАНЕ</p>

                    </div>
                </Link>

                <a href="http://www.shop.continent.kg">
                    <p className={'p__info'}>УЗНАТЬ БОЛЬШЕ О НАШЕЙ КОМПАНИИ</p>
                </a>
                <Button/>
                <div className="header__cart">
                </div>
            </div>
        </div>
    )
}

export default Header