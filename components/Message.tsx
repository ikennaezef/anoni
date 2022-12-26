import React from "react";
import { motion } from "framer-motion";
import { formatDate } from "../utils/random";
import { MessageType } from "../types";

export interface MessageProps {
	message: MessageType;
}

const Message = ({ message }: MessageProps) => {
	const date = message?.timestamp?.seconds;

	const formattedDate = formatDate(date);

	return (
		<motion.div
			layout
			transition={{ duration: 1 }}
			className=" bg-darkLight rounded mb-4">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="p-5">
				<h4 className="font-bold text-xl text-purple-500 mb-4">Message</h4>
				<div className="my-2">
					<p className="text-gray-200 mb-3">{message.text}</p>
					<p className="text-violet-300 text-sm">{formattedDate}</p>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Message;
