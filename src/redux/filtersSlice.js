import { createSlice } from "@reduxjs/toolkit";

import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { ImKey } from "react-icons/im";
import { RiAliensFill } from "react-icons/ri";
import { BsFillTreeFill } from "react-icons/bs";

const filtersSlice = createSlice({
  name: "filters",
  initialState: [
    { title: "Boat", icon: <GiFishingBoat /> },
    { title: "New", icon: <GiMineExplosion /> },
    { title: "Private", icon: <ImKey /> },
    { title: "Unique", icon: <RiAliensFill /> },
    { title: "Forest", icon: <BsFillTreeFill /> },
  ],
  reducers: {},
});

export default filtersSlice.reducer;
