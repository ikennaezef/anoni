import React from "react";

interface Props {
	fullscreen: boolean;
}

const Loader = ({ fullscreen }: Props) => {
	return (
		<div
			className={`flex flex-col items-center justify-center bg-darkMain ${
				fullscreen ? "h-screen" : "h-full"
			}`}>
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
