import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        // console.log(res);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <div className="flex justify-center gap-8">
        <div>
          <Link href="Add"> Add Product </Link>
        </div>
        <div>
          <Link href="ProductPage"> Show Product </Link>
        </div>
      </div>

      <h4 className="text-center m-3">Product</h4>
      <div className="flex gap-3 justify-center m-7">
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="p-5 max-w-md border-solid border-2 border-indigo-600 ..."
              >
                <div className="w-20">
                  <img src={item.img} alt={item.type} />
                </div>
                <h4>{item.type}</h4>
                <p>{item.description}</p>
                <h5>${item.price}</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;
