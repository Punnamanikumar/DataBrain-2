import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import "./Header.css";
import logo from "../Images/logo.png";
import cart from "../Images/cart.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import Products from "../Products/Products";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const handelSearch = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setSearchData(e.target.value);
    // console.log(searchData);
  };

  const cartItem = useSelector((state) => state.cart);

  return (
    <div className="header">
      <div className="menu"><label htmlFor="check"><i className="fas fa-bars"></i></label></div>
      <div className="nav">
        <input type="checkbox" id="check" />
        <div className="nav-item flex">
          <NavLink to="/home"><img src={logo} height="50px" alt="" /></NavLink>
          <div><NavLink to="/men"style={({ isActive }) => { return { color: isActive ? "red" : "Black", textDecoration: "none",}}}>MEN</NavLink></div>
          <div><NavLink to="/women"style={({ isActive }) => {return { color: isActive ? "red" : "Black", textDecoration: "none"}}}>WOMEN</NavLink></div>
          <div><NavLink to="/boy" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",}}}>KIDS</NavLink></div>
          <div><NavLink to="/home&living"style={({ isActive }) => {return {color: isActive ? "red" : "Black", textDecoration: "none"}}}>HOME & LIVING</NavLink></div>
          <div><NavLink to="/beauty" style={({ isActive }) => {return { color: isActive ? "red" : "Black", textDecoration: "none"}}}>BEAUTY</NavLink></div>
          <div className="searchIcon"><SearchIcon /></div>
          <div className="search"><input placeholder="Search by Category" onChange={handelSearch}value={searchData}/></div>
          <button className="carticon"><img src={cart} height="40px" alt="" /><span className="itemNunm">{cartItem > 0 ? cartItem : ""}</span></button>
        </div>
      </div><hr />
      <div className="searchdata"><Products search={searchData} /></div>
    </div>
  );
};

export default Header;
