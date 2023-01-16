import React from "react";

import Stopwatch from "./stopwatch.jsx";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//create your first component
const Home = () => {
	return (
		<div className="text-center h-100">
			<h1 className="text-center mt-5">Stopwatch</h1>
			<Stopwatch />
			<p>
				Made by{" "}
				<a href="https://github.com/jessicabrinegar">Jessie B</a>, with
				love!
			</p>
		</div>
	);
};
export default Home;

// <SecondsCounter seconds={3434} />
// Create option to countdown from a specified #, with an alert when it gets to 0