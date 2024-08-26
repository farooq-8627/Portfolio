import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = (props) => {
	const { title, images, text, github, link, tech } = props;
	const [isOpen, setIsOpen] = useState(false);

	const settings = {
		customPaging: function (i) {
			return (
				<a>
					<img
						className="object-cover"
						src={images[i]}
						alt={`Connectz ${i + 1}`}
					/>
				</a>
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "ease-in",
	};

	const truncateText = (text, maxLength) => {
		return text.length > maxLength
			? text.substring(0, maxLength) + "..."
			: text;
	};

	return (
		<>
			<div
				className="max-w-full sm:max-w-sm mx-4 md:mx-auto rounded-xl overflow-hidden shadow-lg p-6 card-bg"
				data-aos="fade-up"
			>
				<h2 className="text-xl md:text-2xl font-bold font-poppins mb-4 text-[var(--secondary-heading-color)]">
					{title}
				</h2>
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index}>
							<img
								className="w-full h-64 object-cover cursor-pointer mb-6"
								src={image}
								alt={`Slide ${index + 1}`}
								onClick={() => setIsOpen(true)}
							/>
						</div>
					))}
				</Slider>
				<p
					className="text-[var(--card-secondary-color)] text-base mt-8 cursor-pointer h-12 overflow-hidden"
					onClick={() => setIsOpen(true)}
				>
					{truncateText(text, 80)}
				</p>
				<div className="flex justify-between">
					<a
						href={github}
						className="mt-4 bg-[var(--card-primary-text-color)] rounded-full"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/projects/github.webp" alt="link" className="h-8 w-8" />
					</a>
					<a
						href={link}
						className="mt-4"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/projects/rocket2.webp" alt="link" className="h-8 w-8" />
					</a>
				</div>
			</div>

			{/* Modal or Full-Page View */}
			{isOpen && (
				<div
					className="fixed inset-0 h-full bg-black bg-opacity-80 flex justify-center items-center z-40"
					onClick={() => setIsOpen(false)}
					data-aos="fade-up"
				>
					<button
						className="absolute top-0 sm:top-4 right-4 text-[var(--card-secondary-text-color)] text-3xl md:text-4xl z-50"
						onClick={() => setIsOpen(false)}
					>
						&times;
					</button>
					<div
						className="max-w-4xl w-11/12 overflow-scroll bg-[var(--card-background-color)] p-4 md:p-6 md:px-8 rounded-lg shadow-lg relative"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--secondary-heading-color)]">
							{title}
						</h2>
						<Slider {...settings}>
							{images.map((image, index) => (
								<div key={index}>
									<img
										className="w-full h-64 md:h-96 object-contain border py-1 mb-6"
										src={image}
										loading="lazy"
										alt={`Slide ${index + 1}`}
									/>
								</div>
							))}
						</Slider>
						<p className="text-[var(--card-secondary-text-color)] text-lg mt-8 max-h-20 overflow-scroll leading-5 md:leading-7">
							{text}
						</p>
						<div className="flex flex-wrap items-center mt-4">
							<p className="font-bold text-[var(--secondary-heading-color)] text-base mr-2">
								Technologies Used:
							</p>
							<p className="text-[var(--card-secondary-text-color)] text-base">
								{tech.join(", ")}
							</p>
						</div>
						<div className="flex justify-between mt-8">
							<a
								href={github}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[var(--card-primary-text-color)] rounded-full"
							>
								<img
									src="/projects/github.webp"
									alt="link"
									className="h-10 w-10"
								/>
							</a>
							<a href={link} target="_blank" rel="noopener noreferrer">
								<img
									src="/projects/rocket2.webp"
									alt="link"
									className="h-10 w-10"
								/>
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Card;
