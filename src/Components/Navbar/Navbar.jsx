import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { FiBriefcase, FiMessageSquare } from "react-icons/fi";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("home");

	const handleClick = (targetId) => {
		setActiveLink(targetId);
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const options = {
			threshold: 0.3, // 50% of the section should be in view
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveLink(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	return (
		<nav className="w-11/12 max-w-md nav-box z-2 fixed bottom-2 left-1/2 transform -translate-x-1/2">
			<div className="flex justify-around w-4/5">
				<a
					href="#home"
					onClick={() => handleClick("home")}
					className={`nav-li ${activeLink === "home" ? "active" : ""}`}
				>
					<AiOutlineHome size={22} />
				</a>
				<a
					href="#about"
					onClick={() => handleClick("about")}
					className={`nav-li ${activeLink === "about" ? "active" : ""}`}
				>
					<AiOutlineUser size={22} />
				</a>
				<a
					href="#skills"
					onClick={() => handleClick("skills")}
					className={`nav-li ${activeLink === "skills" ? "active" : ""}`}
				>
					<AiOutlineBook size={22} />
				</a>
				<a
					href="#projects"
					onClick={() => handleClick("projects")}
					className={`nav-li ${activeLink === "projects" ? "active" : ""}`}
				>
					<FiBriefcase size={22} />
				</a>
				<a
					href="#contact"
					onClick={() => handleClick("contact")}
					className={`nav-li ${activeLink === "contact" ? "active" : ""}`}
				>
					<FiMessageSquare size={22} />
				</a>
				<a
					href="/Resume.pdf"
					download="Resume.pdf"
					className={`nav-li ${activeLink === "resume" ? "active" : ""}`}
				>
					<PictureAsPdfOutlinedIcon />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
