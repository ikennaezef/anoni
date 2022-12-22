import {
	addDoc,
	collection,
	onSnapshot,
	orderBy,
	query,
	Timestamp,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsShareFill, BsWhatsapp } from "react-icons/bs";
import {
	Footer,
	Loader,
	MessagesWrapper,
	Navbar,
	UsernameModal,
} from "../components";
import { useAppContext } from "../context";
import { db } from "../firebase/config";
import { generateId } from "../utils/random";

const Dashboard = () => {
	const { currentUser } = useAppContext();
	const [pageloading, setPageLoading] = useState<boolean>(true);
	const [messages, setMessages] = useState<any>([]);
	const router = useRouter();

	const getMessages = async () => {
		try {
			const collectionRef = await collection(
				db,
				`user/${currentUser && currentUser.uid}/messages`
			);
			const messagesQuery = await query(
				collectionRef,
				orderBy("timestamp", "desc")
			);

			const unsub = await onSnapshot(messagesQuery, (doc) => {
				setMessages(doc.docs.map((doc) => doc.data()));
			});
		} catch (error) {
			console.log("ERROR", error);
		}
	};

	const shareHandler = () => {
		if (navigator.share) {
			navigator
				.share({
					title: `Send me an anonymous message on anoni. I won't know who sent it`,
					text: `Send me an anonymous message on anoni. I won't know who sent it`,
					url: `/send_message/${currentUser.uid}`,
				})
				.then(() => console.log("Thanks for sharing"))
				.catch((err) => console.log("ERROR", err));
		} else {
			console.log("Cant share");
		}
	};

	const waShareText = `https://api.whatsapp.com/send?text=Send me an anonymous message on anoni. I won't know who sent it... https://anoni.netlify.app/send_message/${currentUser?.uid}`;

	useEffect(() => {
		if (!currentUser) {
			router.push("/register");
		} else {
			setPageLoading(false);
			getMessages();
		}
	}, [currentUser]);

	if (pageloading) {
		return <Loader fullscreen={true} />;
	}

	return (
		<div className="bg-darkMain min-h-screen relative overflow-hidden">
			<Navbar />
			<div className="container mx-auto py-6 px-2">
				<div className="flex flex-col md:flex-row space-y-6 md:space-y-0 mb-4 justify-between items-center">
					<h2 className="text-gray-100 text-xl text-center md:text-left">
						Welcome to your dashboard,{" "}
						<span className="font-semibold">
							{(currentUser && currentUser?.username) ||
								(currentUser && currentUser?.displayName)}
						</span>
					</h2>
				</div>
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-3">
					<button
						onClick={shareHandler}
						className="px-4 py-2 bg-transparent flex justify-center items-center border border-purpleMain text-purpleMain rounded-md hover:bg-purpleMain hover:text-white">
						{" "}
						<BsShareFill color="inherit" />{" "}
						<span className="ml-2 text-inherit">Share Your Link</span>
					</button>
					<a
						href={waShareText}
						target="_blank"
						className="flex justify-center items-center bg-green-500 px-4 py-2 rounded-md text-white">
						<BsWhatsapp fontSize="1.2rem" />
						<span className="ml-2">Share on WhatsApp</span>
					</a>
				</div>
				<section className="mt-12">
					<h2 className="text-gray-200 text-2xl text-center">
						Here are your messages
					</h2>
					<MessagesWrapper messages={messages} />
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
