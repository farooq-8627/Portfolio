import React, { useEffect } from "react";
import Card from "../Components/Cards";
import AOS from "aos";
import projectsData from "../Utils/Projects";
const Projects = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<section id="projects" className="section-bg">
			<header>
				<h2 className="page-heading" data-aos="fade-down">
					My Experience
				</h2>
			</header>
			<div className="flex flex-wrap justify-center mx-2 gap-6">
				{projectsData.map((cardData, index) => (
					<Card
						key={index}
						title={cardData.title}
						images={cardData.images}
						text={cardData.text}
						github={cardData.github}
						link={cardData.link}
						tech={cardData.tech}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
