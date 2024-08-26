import React, { useState, useEffect } from "react";
import AOS from "aos";
import TypingTitle from "../Components/TypingTitle";
import Socialmedia from "../Components/Socialmedia";

const Home = () => {
	const [isTypingComplete, setIsTypingComplete] = useState(false);

	const handleTypingComplete = () => {
		setIsTypingComplete(true);
	};

	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<section
			id="home"
			className="relative flex w-full min-h-screen bg-gray-800 items-center justify-center"
		>
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="clouds"></div>
			<header className="absolute z-30 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around h-full mb-8 lg:mb-12">
				<div
					className="grid place-content-center text-center lg:w-1/3 md:w-full lg:mb-0 mb-4"
					data-aos="fade-right"
				>
					<p className="text-2xl font-medium hello">Hello I'm</p>
					<h1 className="ml-2 text-5xl lg:text-7xl mt-2 lg:mt-6 font-greatVibes font-bold">
						Umar &nbsp;FarooQ
					</h1>
					<div className="mt-2 lg:mt-4 text-start">
						<TypingTitle
							onTypingComplete={handleTypingComplete}
							string={["Designer", "Developer", "Programmer", "Freelancer"]}
							infinite={true}
						/>
					</div>
				</div>
				<figure
					className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] flex justify-center items-center"
					data-aos="fade-left"
				>
					<img
						src="/images/final-img.png"
						alt="Profile-photo"
						className="w-full h-full bg-[#0FA4AF] bg-opacity-20 rounded-full object-cover"
					/>
				</figure>
			</header>
			<p
				className="z-30 absolute bottom-32 md:text-xl font-mono mx-auto text-center mt-8 lg:mt-12"
				data-aos="fade-up"
			>
				I craft scalable and maintainable web solutions that drive business
				growth.
			</p>
			<footer className="absolute bottom-20 w-full flex justify-center">
				<div className="h-8 w-full rounded-full z-40 text-center space-x-6 md:space-x-8">
					<Socialmedia />
				</div>
			</footer>
		</section>
	);
};

export default Home;
