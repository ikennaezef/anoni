import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="nav-sticky px-2 md:px-6 py-10 border-b-2 border-gray-600">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<div>
						<span className="text-purpleMain purple-glow font-bold text-4xl">
							a
						</span>
						<span className="text-purpleMain purple-glow font-bold text-4xl">
							n
						</span>
						<span className="text-purpleMain purple-glow font-bold text-4xl">
							o
						</span>
						<span className="text-purpleMain purple-glow font-bold text-4xl">
							n
						</span>
						<span className="text-purpleMain purple-glow font-bold text-4xl">
							i
						</span>
					</div>
				</div>
				<div className="flex space-x-5">
					<Link href="/register">
						<p className="text-gray-200 text-lg hover:underline hover:decoration-purpleMain">
							Get Started
						</p>
					</Link>
					<Link href="/contact">
						<p className="text-gray-200 text-lg hover:underline hover:decoration-purpleMain">
							Contact
						</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
