import axios from "axios";
import React from "react";

function Home(products) {
  console.log(products);
  return <p>Home</p>;
}

Home.getInitialProps = async () => {
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);
  return { products: response.data };
};

export default Home;
