import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";

const About = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);

	return (
		<section id="about" className="section-bg py-12">
			<header>
				<h2 className="page-heading" data-aos="fade-down">
					About Me
				</h2>
			</header>
			<div className="flex flex-col lg:flex-row md:justify-evenly items-center">
				<figure
					className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] md:mt-6 flex justify-center items-center mt-8 md:my-auto"
					data-aos="fade-right"
				>
					<img
						src="/images/about.png"
						alt="Profile-photo"
						className="w-full h-full bg-[var(--card-background-color)] bg-opacity-30 rounded-full object-contain drop-shadow-2xl"
					/>
				</figure>
				<article className="w-full p-8 lg:w-1/2 text-lg font-extralight font-poppins">
					<h2
						className="text-2xl md:text-3xl text-bold text-center font-normal text-[var(--secondary-heading-color)]"
						data-aos="fade-right"
					>
						SOFTWARE DESIGNER AND DEVELOPER
					</h2>
					<br />
					<div className="flex gap-4 md:gap-6 py-6">
						<div className="card-layout card-shadow" data-aos="fade-left">
							<SecurityOutlinedIcon
								sx={{ color: "var(--primary-heading-color)", fontSize: 30 }}
							/>
							<p className="card-layout-head">Experience</p>
							<p className="card-layout-body">2+ Years Workng</p>
						</div>
						<div className="card-layout card-shadow" data-aos="fade-left">
							<WorkOutlineOutlinedIcon
								sx={{ color: "var(--primary-heading-color)", fontSize: 30 }}
							/>
							<p className="card-layout-head">Completed</p>
							<p className="card-layout-body">10+ Projects</p>
						</div>
						<div className="card-layout card-shadow" data-aos="fade-left">
							<HeadsetMicOutlinedIcon
								sx={{ color: "var(--primary-heading-color)", fontSize: 30 }}
							/>
							<p className="card-layout-head">Support</p>
							<p className="card-layout-body">Online 24/7</p>
						</div>
					</div>
					<br />
					<p className="font-extralight" data-aos="fade-right">
						I’m a passionate Full Stack Developer and Web Designer with a strong
						foundation in web technologies. I thrive on learning new tools and
						techniques, delivering creative and efficient solutions. My
						freelance work has sharpened my skills in crafting tailored web
						experiences that meet client goals, all while staying on top of the
						latest industry trends.
					</p>
					<br />
					<p
						className="flex flex-col md:flex-row md:space-x-8"
						data-aos="fade-left"
					>
						<span>
							<strong className="text-[var(--secondary-heading-color)]">
								College:
							</strong>{" "}
							SRM University AP
						</span>
						<span>
							<strong className="text-[var(--secondary-heading-color)]">
								Email:
							</strong>{" "}
							umarfarooq2862@gmail.com
						</span>
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
