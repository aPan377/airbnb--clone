import { createSlice } from "@reduxjs/toolkit";

import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";

const rentalsSlice = createSlice({
  name: "rentals",
  initialState: [
    { title: "Texas, USA", image: house1, price: "1,541" },
    { title: "Texas, USA", image: house2, price: "1,541" },
    { title: "Texas, USA", image: house3, price: "1,541" },
    { title: "Texas, USA", image: house4, price: "1,541" },
    { title: "Texas, USA", image: house5, price: "1,541" },
    { title: "Texas, USA", image: house1, price: "1,541" },
    { title: "Texas, USA", image: house2, price: "1,541" },
    { title: "Texas, USA", image: house3, price: "1,541" },
    { title: "Texas, USA", image: house4, price: "1,541" },
    { title: "Texas, USA", image: house5, price: "1,541" },
  ],
  reducers: {},
});

export default rentalsSlice.reducer;
