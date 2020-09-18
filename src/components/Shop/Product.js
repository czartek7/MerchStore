import React from "react";
import { useEffect, useState } from "react";
import "./Product.scss";

function Product({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/");
    const items = await res.json();
    const item = items.find((item) => item.id == `${match.params.id}`);
    setItem(item);
  };

  return (
    <div className="Product">
      <div className="desc-product">
        <h1 className="name-product">{item.name}</h1>
        <h2 className="price-product">{item.price} PLN</h2>
        <p className="info-product">{item.description}</p>
        <button className="cartbutton">
          <p>Add to cart</p>
        </button>
      </div>
      <div className="img-product">
        <img src={item.product_img} alt="" />
      </div>
    </div>
  );
}

export default Product;
