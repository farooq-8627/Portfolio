import React from "react";
import Typewriter from "typewriter-effect";

const TypingTitle = ({ onTypingComplete, string, infinite }) => {
	return (
		<div className="title">
			<h1>
				<Typewriter
					options={{
						strings: string,
						autoStart: true,
						delay: 75,
						onComplete: () => {
							onTypingComplete();
						},
						loop: infinite,
						cursor: "|",
						cursorClassName: "cursor inline text-white text-4xl font-thin ml-2",
					}}
				/>
			</h1>
		</div>
	);
};

export default TypingTitle;
