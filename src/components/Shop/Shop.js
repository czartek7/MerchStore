import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.scss";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/");
    const items = await res.json();
    setItems(items);
  };

  return (
    <div className="Shop">
      {items.map((item) => (
        <Link
          to={`/shop/${item.id}`}
          style={{ textDecoration: "none" }}
          className={`shop-item id${item.id}`}
        >
          <h1 className="item-name">{item.name}</h1>
          <img src={item.product_img} alt="" />
          <p>{item.price} PLN</p>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
