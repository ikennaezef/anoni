import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="py-8 bg-purple-900 mt-10">
			<div className="container mx-auto flex justify-between items-center px-4 text-gray-100">
				<div>
					<Link href="/">
						<div>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								a
							</span>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								n
							</span>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								o
							</span>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								n
							</span>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								i
							</span>
						</div>
					</Link>
				</div>
				<div>
					<p className="text-gray-300 text-sm">
						Copyright &copy; {new Date().getFullYear()} - Anoni
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
