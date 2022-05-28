import React, { useContext, useState } from "react";
import { CategoryContext } from "../Context/ContextApi";

const Sort = () => {
  const [data] = useContext(CategoryContext);
  const [newData, setNewData] = useState([]);

  const sortt = () => {
    var newData = data.sort((a, b) => {
      return b.price - a.price;
    });
    setNewData(newData);
    // console.log(newdata);
    console.log("me", newData);
  };
  return (
    <div>
      {newData.map((val) => (
        <div>{val.price},</div>
      ))}
      <button onClick={sortt}>Sort</button>
    </div>
  );
};

export default Sort;
