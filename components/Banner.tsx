import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
	return (
		<div>
			<div className="container mx-auto mt-5 flex flex-col-reverse md:flex-row md:items-center md:justify-between space-x-0 md:space-x-8 space-y-8 md:space-y-0 px-2 md:px-6 py-4">
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="basis-1 md:basis-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0">
					<h1 className="text-gray-100 text-2xl md:text-4xl font-bold mb-8 text-center md:text-left leading-12">
						Send Secret Anonymous Messages Online
					</h1>
					<p className="text-gray-300 text-md md:text-xl leading-8 text-center md:text-left">
						<span className="text-purpleMain">Anoni</span> is an interactive
						anonymous messaging platform with a dare game. Create your Profile
						Link and Send it to all your contacts to check what your friends
						think about you. With the help of Anoni, you can send and recieve
						anonymous compliments easily for free!
					</p>
					<Link href="/register">
						<button className="bg-purpleMain text-white rounded px-6 py-3 text-md md:text-xl cursor-pointer mt-8 hover:bg-purpleDark">
							Get Started
						</button>
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="basis-1 md:basis-1/2">
					<img
						alt="boy sending an anonymous message"
						src="/images/boy.svg"
						className="w-auto md:w-[30rem]"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Banner;
