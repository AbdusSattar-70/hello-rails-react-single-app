import React from "react";
import Greetings from "./Greetings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Greetings />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;