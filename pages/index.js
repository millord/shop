import axios from "axios";
import React from "react";

function Home() {
  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const url = "http://localhost:3000/api/products";
    const response = await axios.get(url);
    console.log(response.data);
  }

  return <p>Home</p>;
}

export default Home;
