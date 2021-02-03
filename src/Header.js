import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import sushiLogo from "./images/sushiLogo.png";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={sushiLogo} alt="" />
      </Link>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">About</span>
          <span className="header__optionLineTwo">Sushi Finder</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Health Benifits</span>
          <span className="header__optionLineTwo">of Sushi</span>
        </div>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
