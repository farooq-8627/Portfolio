import React, { useEffect, useState } from "react";
import TypingTitle from "./TypingTitle";

const Loader = ({ onLoadingComplete }) => {
	const [isTypingComplete, setIsTypingComplete] = useState(false);

	const handleTypingComplete = () => {
		setIsTypingComplete(true);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (typeof onLoadingComplete === "function") {
				onLoadingComplete();
			}
		}, 5000);

		return () => clearTimeout(timer);
	}, [onLoadingComplete]);

	return (
		<div className="loader">
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="clouds"></div>
			<TypingTitle
				onTypingComplete={handleTypingComplete}
				string={["Umar Farooq Shaik"]}
			/>
		</div>
	);
};

export default Loader;
