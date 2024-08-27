import React, { useEffect } from "react";
import { skillsData } from "../Utils/skills";
import { skillsImage } from "../Utils/skill-image";
import AOS from "aos";
import Marquee from "react-fast-marquee";

const Skills = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);

	return (
		<section id="skills" className="section-bg py-12">
			<header>
				<h2 className="page-heading" data-aos="fade-down">
					Skills
				</h2>
			</header>

			<div className="w-11/12 md:w-5/6 mx-auto" data-aos="fade-up">
				<Marquee
					gradient={false}
					speed={80}
					pauseOnHover={true}
					pauseOnClick={true}
					delay={0}
					play={true}
					direction="left"
				>
					{skillsData.map((skill, id) => (
						<div
							className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
							key={id}
						>
							<div className="h-full w-full rounded-lg border border-[#1f223c] bg-[var(--card-background-color)] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
								<div className="flex -translate-y-[1px] justify-center">
									<div className="w-3/4">
										<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
									</div>
								</div>
								<div className="flex flex-col items-center justify-center gap-3 p-6">
									<div className="h-8 sm:h-10">
										<img
											src={skillsImage(skill)} // Use .default for ES module imports
											alt={skill}
											width={40}
											height={40}
											className="h-full w-auto rounded-lg"
										/>
									</div>
									<p className="text-[var(--card-secondary-text-color)] text-sm sm:text-lg">{skill}</p>
								</div>
							</div>
						</div>
					))}
				</Marquee>
			</div>
		</section>
	);
};

export default Skills;
