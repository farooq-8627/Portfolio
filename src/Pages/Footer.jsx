import React from "react";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import Socialmedia from "../Components/Socialmedia";
const Footer = () => {
	return (
		<section className="relative border-t bg-[var(--section-background-color)] border-[#353951] text-white pb-12 md:pb-10">
			<div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
				<div className="flex justify-center -z-40">
					<div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
				</div>
				<div className="flex flex-col space-y-2 md:flex-row items-center justify-between">
					<p className="text-sm">
						© Portfolio by{" "}
						<a
							target="_blank"
							href="https://www.linkedin.com/in/umar-farooq-sk/"
							className="text-[var(--primary-heading-color)]"
						>
							Umar Farooq
						</a>
					</p>
					<div className="flex items-center gap-5">
						<a
							target="_blank"
							href="https://github.com/said7388/Portfolio"
							className="flex items-center gap-2 uppercase hover:text-[var(--primary-heading-color)]"
						>
							<IoStar />
							<span>Star</span>
						</a>
						<a
							target="_blank"
							href="https://github.com/said7388/Portfolio/fork"
							className="flex items-center gap-2 uppercase hover:text-[var(--primary-heading-color)]"
						>
							<CgGitFork />
							<span>Fork</span>
						</a>
					</div>
					<div className="h-8 rounded-full text-center space-x-6 md:space-x-8">
						<Socialmedia />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
