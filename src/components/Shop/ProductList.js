import React, { useState } from "react";
import book from "../../images/products/book.jpg";
import clock from "../../images/products/clock.jpg";
import mug from "../../images/products/mug.jpg";
import pendrive from "../../images/products/pendrive.jpg";
import poster from "../../images/products/poster.jpg";

const ProductList = () => {
  const [products, setProduct] = useState([
    {
      name: "Magnificent Czarek - Autobiography",
      price: "60 PLN",
      key: 1,
      img: book,
    },
    {
      name: "Custom clock with Czarek's face",
      price: "100 PLN",
      key: 2,
      img: clock,
    },
    {
      name: "Elegant mug with Czarek's face",
      price: "40 PLN",
      key: 3,
      img: mug,
    },
    {
      name: "Memory stick with Czarek's face",
      price: "80 PLN",
      key: 4,
      img: pendrive,
    },
    {
      name: "Czarek's portrait - the poster",
      price: "150 PLN",
      key: 5,
      img: poster,
    },
  ]);

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.key}
          className={product.key % 2 === 0 ? "dif-color" : null}
        >
          <h1 className="product-title">{product.name}</h1>
          <ul
            className={product.key % 2 === 0 ? "item" : "item-reverse"}
            key={product.key}
          >
            <li className="price">{product.price}</li>
            <img className="image" src={product.img} alt="" />
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
