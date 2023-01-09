import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000/api/data" , {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handledelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/api/data`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }).then((res) => {
      getData()
    });
  };

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
      <div className="flex gap-3 justify-center m-5 flex-wrap">
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
                <br/>
                <h4>Type :-{item.type}</h4>
                <p>Description :-{item.description}</p>
                <h5>Price :-${item.price}</h5>
                <br/>
                <button onClick={() => handledelete(item.id)}>Remove</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;
