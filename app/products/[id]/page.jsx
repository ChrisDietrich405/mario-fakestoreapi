import React from "react";

import DetailsPage from "@/app/component/Details/page";

const fetchDetails = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const details = await response.json();
  return details;
};

const ProductDetails = async ({ params: { id } }) => {
  const details = await fetchDetails(id);

  return (
    <div>
      <DetailsPage details={details} />
      {/* {details.description}${details.price} */}
    </div>
  );
};

export default ProductDetails;
