import React from "react";
import images from "./index_images";
import Carrossel from ".";

const Produtos = () => {
  return (
    <>
      <div id="carrossel">
        <Carrossel  data={images}/>
      </div>
    </>
  );
};

export default Produtos;