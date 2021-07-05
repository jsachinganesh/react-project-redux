import React from "react";
import "./Header.scss";

import logo from "../../assets/logo.svg";
import homeSvg from "../../assets/home.svg";
import { Link } from "react-router-dom";
import SideContext from "../../context/SideContext";
import { connect } from "react-redux";

const Header = (props) => {

  const logOutRef = React.useContext(SideContext);


  

  const handlerSidebar = (e) => {
    if (window.innerWidth > 600) {
      logOutRef.current.style.transform = "translateX(0)";
    } else {
      logOutRef.current.style.transform = "translateX(0)";
      logOutRef.current.style.marginLeft = "1px";
    }
  };
  return (
    <header className="header">
      <div onClick={handlerSidebar} className="logo">
        <img src={`${logo}`} alt="logo" />
      </div>
      <Link to="/">
        <div className="themeDiv">
          
          <img src={`${homeSvg}`} alt="logo" />
          
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state?.auth?.user?.user?.uid,
    invoices: state.invoiesState.invoices,
  };
};

// const mapStateToDispatch = {
  
// };
export default connect(mapStateToProps)(Header);
