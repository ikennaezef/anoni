import React from "react";

const Loader = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-darkMain">
			<div className="flex flex-col items-center justify-center">
				<h2 className="text-purpleMain purple-glow bg-[#a955f70e] inline-block font-bold text-center text-xl mb-2 animate-bounce">
					anoni
				</h2>
				<div className="my-8">
					<div className="swap flex justify-center items-center"></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
