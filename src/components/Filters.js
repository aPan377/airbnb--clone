import React from "react";
import Filter from "./Filter";

import { useSelector } from "react-redux";

const Filters = () => {
  const filters = useSelector((state) => state.filters);

  return (
    <div className="">
      <div className="flex flex-wrap justify-start gap-1 sm:gap-4 mt-4">
        {filters.map((filter, index) => (
          <Filter key={index} title={filter.title} icon={filter.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
