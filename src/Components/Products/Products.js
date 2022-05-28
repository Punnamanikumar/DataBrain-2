import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../Context/ContextApi";
import "./Products.css";

const Products = (props) => {
  const [data] = useContext(CategoryContext);
  const [a, setA] = useState(true);
  const [filterdata, setFilterdata] = useState([]);
  const [categoryblock, setCategoryblock] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [filterdata]);

  const filterData = (e) => {
    if (e.target.value === "Men") {
      let filterDataa = data.filter((val) => {
        return val.category === "Men";
      });
      setFilterdata(filterDataa);
      setCategoryblock("Men's");
    }
    if (e.target.value === "Women") {
      let filterDataa = data.filter((val) => {
        return val.category === "Women";
      });
      setFilterdata(filterDataa);
      setCategoryblock("Women's");
    }
    if (e.target.value === "Boy") {
      let filterDataa = data.filter((val) => {
        return val.category === "Boy";
      });
      setFilterdata(filterDataa);
      setCategoryblock("Kid's");
    }
    if (e.target.value === "All") {
      setFilterdata(data);
      setCategoryblock("Latest Products");
    }
    setA(false);
  };
  useEffect(() => {
    if (typeof props.search !== "undefined" && props.search.length > 2) {
      let filterData = data.filter(
        (val) => val.category.toLowerCase() === props.search.toLowerCase()
      );
      console.log("USEEFFECT", filterData);
      // setSearchData(filterData);
      // console.log(searchData);
    }
    // console.log(props.search);
  }, [props, data]);
  return (
    <div>
      <div className="box">
        <div className="b1">Filter</div>
        <div>
          <input
            type="radio"
            value="Men"
            className="radio"
            placeholder="min"
            onChange={filterData}
            name="radio"
          />
          <span className="f1">Men</span>
        </div>
        <div>
          <input
            type="radio"
            value="Women"
            className="radio radio1"
            placeholder="min"
            onChange={filterData}
            name="radio"
          />
          <span className="f1">Women</span>
        </div>
        <div>
          <input
            type="radio"
            value="Boy"
            className="radio radio2"
            placeholder="min"
            onChange={filterData}
            name="radio"
          />
          <span className="f1">Boy</span>
        </div>
        <div>
          <input
            type="radio"
            value="All"
            className="radio radio3"
            placeholder="min"
            onChange={filterData}
            name="radio"
          />
          <span className="f1">All Products</span>
        </div>
      </div>
      <div>
        <div className="allproducts">
          {a ? (
            <div>
              <div className="banner"><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/22/3a477e41-f1fa-42b8-9cd8-afb5674878811647952956450-citi.jpg"alt=""/></div>
              <h2 className="productDealls">DEALS OF THE DAY {props.search}</h2>
              <div className="products">
                {data.map((val) => (
                  <div className="productsFlex" key={val.id}>
                    <Link to={`/${val.category}/${val.id}`}> <img src={val.img} alt="" className="productImg" width="280" height="400"/></Link>
                    <div className="box2">
                      <div className="pname">{val.name}</div>
                      <div className="descr">{val.description}</div>
                      <div className="pprice">Rs:{val.price}</div>
                    </div><br /><br />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="allproducts">
              <div className="banner"><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/22/3a477e41-f1fa-42b8-9cd8-afb5674878811647952956450-citi.jpg" alt=""/></div>
              <h2 className="productDealls">You are in {categoryblock} Block</h2>
              <div className="products ">
                {filterdata.map((val) => (
                  <div className="productsFlex" key={val.id}>
                    <Link to={`/${val.category}/${val.id}`} className="Linkcls"><img src={val.img} alt="" className="productImg" width="280" height="400"/></Link>
                    <div className="box2">
                      <div className="pname">{val.name}</div>
                      <div className="descr">{val.description}</div>
                      <div className="pprice">Rs:{val.price}</div>
                    </div><br /><br />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
