import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const Contact = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [result, setResult] = React.useState("");

	const [focusedInput, setFocusedInput] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFocus = (inputName) => {
		setFocusedInput(inputName);
	};

	const handleBlur = () => {
		setFocusedInput("");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!formData.name || !formData.email || !formData.message) {
			setResult("All fields required.");
			setTimeout(() => {
				setResult("");
			}, 3000);
			return;
		}

		setResult("Sending....");

		// Create a new FormData object
		const formBody = new FormData();
		formBody.append("access_key", "4627a365-94d8-4d8c-b9b4-f5cfef9e8c11");
		formBody.append("name", formData.name);
		formBody.append("email", formData.email);
		formBody.append("message", formData.message);
		formBody.append("subject", `${formData.name} Sent You a Message`);
		formBody.append("from_name", "Portfolio");
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formBody,
			});

			const data = await response.json();

			if (data.success) {
				setResult("Sent");
				setTimeout(() => {
					setResult("");
				}, 3000);
				setFormData({ name: "", email: "", message: "" });
				event.target.reset();
			} else {
				setResult(data.message);
			}
		} catch (error) {
			console.log("Fetch Error:", error);
			setResult("An error occurred while submitting the form.");
		}
	};

	return (
		<section id="contact" className="section-bg py-16">
			<header>
				<h2 className="page-heading" data-aos="fade-down">
					Contact Me
				</h2>
			</header>
			<div className="flex flex-col md:flex-row mx-6 gap-6">
				<div className="flex flex-col justify-center items-center w-full gap-6 mb-6">
					<h2
						className="text-2xl font-bold text-center text-[var(--secondary-heading-color)]"
						data-aos="fade-up"
					>
						Talk to me
					</h2>
					<div
						className="h-full w-full max-w-sm flex-grow rounded-lg card-bg"
						data-aos="fade-left"
					>
						<div className="flex -translate-y-[1px] justify-center">
							<div className="w-3/4">
								<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
							</div>
						</div>
						<div className="flex flex-col items-center justify-center p-6">
							<AttachEmailOutlinedIcon
								sx={{ color: "var(--primary-heading-color)", fontSize: 30 }}
							/>
							<p className="card-layout-head">Email</p>
							<p className="card-layout-body text-sm">
								umarfarooq2862@gmail.com
							</p>
							<a
								href="https://mail.google.com/mail/?view=cm&to=umarfarooq2862@gmail.com"
								className="primary-heading-color"
								target="_blank"
							>
								Write me
								<PlayArrowOutlinedIcon />
							</a>
						</div>
					</div>
					<div
						className="h-full w-full max-w-sm flex-grow rounded-lg card-bg"
						data-aos="fade-right"
					>
						<div className="flex -translate-y-[1px] justify-center">
							<div className="w-3/4">
								<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
							</div>
						</div>
						<div className="flex flex-col items-center justify-center p-6">
							<WhatsAppIcon
								sx={{ color: "var(--primary-heading-color)", fontSize: 30 }}
							/>
							<p className="card-layout-head">WhatsApp</p>
							<p className="card-layout-body text-sm">+91 7286979408</p>
							<a
								href="https://api.whatsapp.com/send?phone=7286979408"
								className="primary-heading-color mt-1"
								target="_blank"
							>
								Write me
								<PlayArrowOutlinedIcon />
							</a>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center w-full">
					<form
						onSubmit={handleSubmit}
						className="rounded-xl w-full max-w-sm flex-grow text-center"
					>
						<h2
							className="text-2xl font-bold mb-4 text-center text-[var(--secondary-heading-color)]"
							data-aos="fade-up"
						>
							Write Me your Message
						</h2>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter name"
							onFocus={() => handleFocus("name")}
							onBlur={handleBlur}
							className={"contact-input placeholder:text-gray-400"}
							style={
								focusedInput === "name"
									? {
											boxShadow:
												"0 6px 8px var(--card-glow-color), 0 -2px 8px var(--card-glow-color)",
											transition: "box-shadow 0.3s ease-in-out",
											fontSize: "1.1rem",
									  }
									: {}
							}
							data-aos="fade-right"
						/>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter email"
							onFocus={() => handleFocus("email")}
							onBlur={handleBlur}
							className={`contact-input placeholder:text-gray-400`}
							style={
								focusedInput === "email"
									? {
											boxShadow:
												"0 6px 8px var(--card-glow-color), 0 -2px 8px var(--card-glow-color)",
											transition: "box-shadow 0.3s ease-in-out",
											fontSize: "1.1rem",
									  }
									: {}
							}
							data-aos="fade-left"
						/>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Write your Message"
							onFocus={() => handleFocus("message")}
							onBlur={handleBlur}
							className={`contact-input h-32 resize-none placeholder:text-gray-400`}
							style={
								focusedInput === "message"
									? {
											boxShadow:
												"0 6px 8px var(--card-glow-color), 0 -2px 8px var(--card-glow-color)",
											transition: "box-shadow 0.3s ease-in-out",
											fontSize: "1.1rem",
									  }
									: {}
							}
							data-aos="fade-right"
						/>
						<button type="submit" className="contact-btn" data-aos="fade-left">
							{result || "Send Message"}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
