import React from "react";

import Rental from "./Rental";

import { useSelector } from "react-redux";

const Rentals = () => {
  const rentals = useSelector((state) => state.rentals);

  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rentals.map((rental, index) => (
          <Rental
            key={index}
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
