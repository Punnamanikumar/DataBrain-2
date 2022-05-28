import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoryContext } from "../Context/ContextApi";

const Category = () => {
  const { category } = useParams();
  const [data] = useContext(CategoryContext);

  return (
    <div>
      <div>
        <div>
          <h2 className="productDeal">
            You are in {category.toUpperCase()}'s Page
          </h2>
          <div className="home">
            <Link to="/home">
              <i className="fa fa-home"></i>
            </Link>
          </div>
          <div className="products">
            {data
              .filter(
                (val) => val.category.toLowerCase() === category.toLowerCase()
              )
              .map((val) => (
                <div className="productsFlex" key={val.id}>
                  <Link to={`/${val.category}/${val.id}`}>
                    <img
                      src={val.img}
                      alt=""
                      className="productImg"
                      width="280"
                      height="400"
                    />
                  </Link>
                  <div className="box2">
                    <div className="pname">{val.name}</div>
                    <div className="descr">{val.description}</div>
                    <div className="pprice">Rs:{val.price}</div>
                  </div>
                  <br />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
