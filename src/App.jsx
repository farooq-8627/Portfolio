// App.js
import React, { useState } from "react";
import Loader from "./Components/Loader";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	return (
		<div className="app">
			{isLoading ? (
				<Loader onLoadingComplete={handleLoadingComplete} />
			) : (
				<>
					<Navbar />
					<Home />
					<About />
					<Skills />
					<Projects />
					<Contact />
					<Footer />
				</>
			)}
		</div>
	);
};

export default App;
