import React from 'react'
import Button from "./Button/Button";
import {Link} from "react-router-dom";
import logo from './logo_trade.png'
const Header = ()=>{
    return (
        <div className="header">
            <Link to={'/'}>
                <div className="header__logo">
                    <img className="continent__logo__img" src={logo}
                         alt="Continent-Trade logo"/>
                </div>
            </Link>
            <div className="container">

                <Button/>
                <div className="header__cart">
                </div>
            </div>
        </div>
    )
}

export default Header