import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
const Socialmedia = () => {
	return (
		<>
			<a
				href="https://www.linkedin.com/in/umar-farooq-sk"
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedInIcon
					sx={{
						color: "white",
						":hover": { color: "var(--primary-heading-color)", scale: 1.3 },
						fontSize: 28,
					}}
				/>
			</a>
			<a
				href="https://github.com/farooq-8627"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHubIcon
					sx={{
						color: "white",
						":hover": { color: "var(--primary-heading-color)", scale: 1.3 },
						fontSize: 28,
					}}
				/>
			</a>
			<a
				href="https://leetcode.com/u/umarfarooq2862/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<CodeIcon
					sx={{
						color: "white",
						":hover": { color: "var(--primary-heading-color)", scale: 1.3 },
						fontSize: 28,
					}}
				/>
			</a>
			<a
				href="https://api.whatsapp.com/send?phone=7286979408"
				target="_blank"
				rel="noopener noreferrer"
			>
				<WhatsAppIcon
					sx={{
						color: "white",
						":hover": { color: "var(--primary-heading-color)", scale: 1.3 },
						fontSize: 28,
					}}
				/>
			</a>
			<a
				href="https://www.instagram.com/farooq_8627/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<InstagramIcon
					sx={{
						color: "white",
						":hover": { color: "var(--primary-heading-color)", scale: 1.3 },
						fontSize: 28,
					}}
				/>
			</a>
		</>
	);
};

export default Socialmedia;
