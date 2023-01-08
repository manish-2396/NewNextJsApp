import Link from "next/link";
import React, { useState } from "react";

const Add = () => {
  const [data, setData] = useState({
    type: "",
    year: "",
    description: "",
    price: "",
    img: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    fetch("http://localhost:3000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Data added successfully!");
        console.log(res);
      });
  };
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
      <div className="pt-0.5 flex justify-center">
        <div>
          <h3 id="name" className="p-2">
            Add to Product
          </h3>
          <form id="form" onSubmit={handleSubmit}>
            <div>
              <label>Image </label>
              <br />
              <input
                required
                type="text"
                name="img"
                placeholder="Enter Image src..."
                id="img"
                onChange={handleChange}
              />
            </div>
            <br/>
            <div>
              <label>Type of Furniture </label>
              <br />
              <select id="type" onChange={handleChange} name="type" required>
                <option value="">Type</option>
                <option value="Study table">Study table</option>
                <option value="chair">chair</option>
              </select>
            </div>
            <br/>
            <div>
              <label>Year of purchase</label>
              <br />

              <select id="year" onChange={handleChange} name="year" required>
                <option value="">Year</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
              </select>
            </div>
            <br/>
            <div>
              <label>Description</label>
              <br />
              <div>
                <input
                  required
                  type="text"
                  name="description"
                  placeholder="Enter Description"
                  id="description"
                  onChange={handleChange}
                />
              </div>
            </div>
            <br/>
            <div>
              <label>Price</label>
              <br />
              <div>
                <input
                  required
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  id="price"
                  onChange={handleChange}
                />
              </div>
            </div>
            <br/>
            <div className="p-2">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
