import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../Context/ContextApi";
import "./ViewProduct.css";
import { add, remove } from "../Redux/Action";

const ViewProduct = () => {
  const { id } = useParams();
  const [product] = useContext(CategoryContext);
  const [data, setData] = useState({
    name: "",
    price: "",
    img: "",
    category: "",
    description: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    product.forEach((val) => {
      if (val.id === id) {
        setData({
          name: val.name,
          img: val.img,
          price: val.price,
          description: val.description,
          category: val.category,
        });
      }
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id, product]);
  return (
    <div className="viewProduct">
      <div className="vpi"><img src={data.img} alt="" id="img-container" /></div>
      <div className="vpb">
        <div className="vpn">{data.name}</div>
        <div className="vpd">{data.description}Classic Fit Tartan Checked Casual Shirt</div>
        <hr className="hr1" />
        <div className="vpp">Rs: {data.price}</div>
      </div>
      <div className="cartDetails">
        <div className="size">
          <div className="ssize">SELECT SIZE </div>
          <div className="flexsize">
            <div className="s1 s"><span className="ins">38</span></div>
            <div className="s2 s"><span className="ins">40</span></div>
            <div className="s3 s"><span className="ins">42</span></div>
            <div className="s4 s"><span className="ins">44</span></div>
            <div className="s5 s"><span className="ins">46</span></div>
          </div>
        </div>
      </div>
      <div className="bag">
        <button className="removeitem" onClick={() => dispatch(remove())}><i className="fa fa-shopping-bag" aria-hidden="true"></i>REMOVE FROM BAG</button>
        <button className="additem" onClick={() => dispatch(add())}><i className="fa fa-shopping-bag" aria-hidden="true"></i>ADD TO BAG</button>
      </div>
    </div>
  );
};

export default ViewProduct;
