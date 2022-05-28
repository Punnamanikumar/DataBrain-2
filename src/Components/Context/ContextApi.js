import React, { createContext, useState } from "react";

//! Context Data...
export const CategoryContext = createContext();
export const CategoryProvider = (props) => {
  const [category] = useState([
    {
      id: "1",
      category: "Men",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2038071/2019/4/9/ace5c891-0717-485c-8080-9c37c5c759821554799993054-Roadster-Men-Black--White-Slim-Fit-Solid-Casual-Shirt-322155-1.jpg",
      name: "Roadster",
      price: "1099",
      description: "Mens Casual Shirts",
    },
    {
      id: "2",
      category: "Men",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10945088/2020/1/31/80fea103-f089-476d-a27d-6594a069a1281580455058892-Roadster-Men-Shirts-6341580455057092-1.jpg",
      name: "FORCLAZ By Decathlon",
      price: "909",
      description: "Mens Casual Shirts",
    },
    {
      id: "3",
      category: "Men",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11369800/2020/3/5/49d3f5b1-9eb9-44c8-bc83-7d4ecdad46981583403443211-Mast--Harbour-Men-Shirts-9231583403441334-1.jpg",
      name: "JAINISH",
      price: "699",
      description: "Mens Casual Shirts",
    },
    {
      id: "4",
      category: "Men",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15353326/2021/11/12/c87e0a49-cceb-4c29-8409-498439ad96a01636717967371-Nautica-Men-Shirts-8721636717965949-1.jpg",
      name: "NEUDIS",
      price: "999",
      description: "Mens Casual Shirts",
    },
    {
      id: "5",
      category: "Men",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg",
      name: "US Polo ,Denim",
      price: "1249",
      description: "Mens Casual Shirts",
    },
    {
      id: "6",
      category: "Men",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11361282/2020/2/14/e1e0dfa4-da44-478f-a0ff-6ae2dc52b61f1581676447137-WROGN-Men-Shirts-9611581676445142-1.jpg",
      name: "ZALORA BASICS",
      price: "2499",
      description: "Mens Casual Shirts",
    },
    {
      id: "7",
      category: "women",
      name: "Tokyo Talkies",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16707642/2022/3/17/d9561814-6a0e-45eb-955d-c29bfcaa46cf1647509128965-MANGO-Women-Shirts-4031647509128665-1.jpg",
      price: "1879",
      description: "Womens Casual Dress",
    },
    {
      id: "8",
      category: "Women",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16543678/2022/2/4/ad14be36-495c-4ea1-be7f-1273f821e40c1643977792304-Style-Quotient-Women-Shirts-5381643977791823-1.jpg",
      name: "H&M",
      price: "2109",
      description: "Womens Casual Dress",
    },
    {
      id: "9",
      category: "Women",
      name: "DELAN",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11208456/2020/1/22/e42a9f06-6113-48dd-83eb-f7534764a7851579691613614-her-by-invictus-Women-Lavender--White-Regular-Fit-Printed-Ca-1.jpg",
      price: "865",
      description: "Womens Casual Dress",
    },
    {
      id: "10",
      category: "Women",
      name: "SHAYE",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13722812/2021/7/21/b8594826-547c-43d6-ae13-e28092b439c41626862987083-Roadster-Women-Shirts-7921626862986445-1.jpg",
      price: "1008",
      description: "Womens Casual Dress",
    },
    {
      id: "11",
      category: "Women",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6939207/2021/1/22/27f2adfe-1159-42e0-a010-4e722e2694651611294157516-her-by-invictus-Women-Green-Regular-Fit-Solid-Casual-Shirt-1-1.jpg",
      name: "MANGO",
      price: "1964",
      description: "Womens Casual Dress",
    },
    {
      id: "12",
      category: "Women",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16154712/2021/11/18/0ec59a2f-196d-4602-a4e4-a269097f60c21637214641613SHAYEWomenWhiteOpaqueCasualShirt1.jpg",
      name: "her by invictus",
      price: "2569",
      description: "Womens Casual Top",
    },
    {
      id: "13",
      category: "Boy",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14101740/2022/3/22/04ff762d-5723-415b-8fc0-a7bc0a835ed51647949136618-US-Polo-Assn-Kids-Boys-White-Regular-Fit-Printed-Casual-Shir-3.jpg",
      name: "pantaloons Junior",
      price: "499",
      description: "Boys Casual Shirt",
    },
    {
      id: "14",
      category: "Boy",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17429640/2022/3/8/08c41bf3-2b19-4a1d-ad86-3d1f16a99ac21646719864732maxBoysBlueTartanChecksCheckedCasualShirt1.jpg",
      name: "ED-a-Mamma",
      price: "236 ",
      description: "Boys Casual Shirt",
    },
    {
      id: "22",
      category: "Boy",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16913298/2022/2/23/dcab7eb5-ce11-42c9-8f0e-8d9f38738f251645607077022-mothercare-Boys-Shirts-2851645607076742-1.jpg",
      name: "Cavio",
      price: "999",
      description: "Boys Casual Shirt",
    },
    {
      id: "15",
      category: "Boy",
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16983430/2022/1/30/03e6ca0e-dac3-419f-af53-72032623b1911643486997303DonutsBoysPinkCasualShirt1.jpg",
      name: "MAX",
      price: "566",
      description: "Boys Casual Shirt",
    },
  ]);
  return (
    <CategoryContext.Provider value={[category]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
