import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import rentalsSlice from "./rentalsSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice,
    rentals: rentalsSlice,
  },
});

export default store;
