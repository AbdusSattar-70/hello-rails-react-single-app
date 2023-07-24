import React, { useEffect } from "react";
import { fetchGreetings } from "../store/greetingsSlice";
import { useDispatch, useSelector } from "react-redux";

function Greetings() {
	const dispatch = useDispatch();
	const greetingsData = useSelector((state) => state.greetings.greetings);
	const singleGreeting = greetingsData[Math.floor(Math.random() * greetingsData.length)];

	useEffect(() => {
		dispatch(fetchGreetings());
	}, [dispatch]);

	return (
		<div>
			<button
				onClick={() => dispatch(fetchGreetings())}
				>
				Generate Message
			</button>
			{singleGreeting && <h1>{singleGreeting.message}</h1>}
		</div>
	);
}

export default Greetings;