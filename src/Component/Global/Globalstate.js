import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
  content: [],
  booking: [],
};

const Globalstate = createSlice({
  initialState,
  name: "stfcreateAuth",
  reducers: {
    createUsers: (state, { payload }) => {
      state.current = payload;
    },
    addcontent: (state, { payload }) => {
      state.content = payload;
    },
    addbooking: (state, { payload }) => {
      state.booking = payload;
    },

    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { createUsers, addcontent, signOut, addbooking } =
  Globalstate.actions;

export default Globalstate.reducer;
