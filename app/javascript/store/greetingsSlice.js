import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  greetings: [],
  loading: false,
};

const greetingsSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {
    setGreetings: (state, action) => {
      state.greetings = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const fetchGreetings = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch("/api/greetings");
    const data = await res.json();
    dispatch(setGreetings(data));
    dispatch(setLoading(false));
  } catch (error) {
    console.error(error);
    dispatch(setLoading(false));
  }
};

// Export the reducer function as the default export
export default greetingsSlice.reducer;

// Export the setGreetings and setLoading actions
export const { setGreetings, setLoading } = greetingsSlice.actions;
