import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
	closeHandler: () => void;
};

const GetStartedModal = (props: Props) => {
	const closeHandler = (e: any) => {
		e.stopPropagation();
	};
	return (
		<div className="flex items-center justify-center absolute w-full h-screen bg-gray-800/95 z-20 p-3">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="relative p-6 border border-purple-300 rounded-md max-w-sm">
				<h2 className="text-purpleMain text-2xl font-bold mb-4">
					Your Turn...
				</h2>
				<button
					onClick={props.closeHandler}
					className="absolute top-4 right-5 p-3 text-white hover:text-red-500">
					<IoCloseOutline color="inherit" fontSize="1.4rem" />
				</button>
				<div className="mt-5">
					<h4 className="font-semibold text-xl text-white mb-2">How To Play</h4>
					<ul className="text-white list-disc ml-3">
						<li>Register an Account</li>
						<li>Share your Profile Link</li>
						<li>
							Recieve anonymous compliments and secret messages from your
							friends.
						</li>
					</ul>
				</div>
				<div>
					<Link href="/register">
						<button className="bg-purpleDark text-white rounded px-6 py-2 text-lg cursor-pointer mt-8 hover:bg-purpleMain">
							Get Started
						</button>
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default GetStartedModal;
