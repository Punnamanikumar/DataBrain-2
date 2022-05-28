import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import PageNotFound from "./Others/PageNotFound";
import Category from "./Products/Category";
import ViewProduct from "./viewProduct/ViewProduct";

const AllComponents = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<ViewProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllComponents;
