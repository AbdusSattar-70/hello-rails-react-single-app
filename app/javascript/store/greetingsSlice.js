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
	},
});

export const { setGreetings } = greetingsSlice.actions;

export default greetingsSlice.reducer;

export const fetchGreetings = () => {
	return async (dispatch) => {
		try {
			const res = await fetch("/api/greetings");
			const data = await res.json();
			dispatch(setGreetings(data));
		} catch (error) {
			console.log(error);
		}
	};
};
