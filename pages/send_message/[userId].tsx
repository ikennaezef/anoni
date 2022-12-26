import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer, GetStartedModal, Loader, Meta } from "../../components";
import { BiPaperPlane } from "react-icons/bi";
import {
	addDoc,
	collection,
	getDocs,
	query,
	Timestamp,
	where,
} from "firebase/firestore";
import { generateId } from "../../utils/random";
import { db } from "../../firebase/config";
import { useAppContext } from "../../context";

const SendMessage = () => {
	const { currentUser } = useAppContext();
	const [messageInput, setMessageInput] = useState("");
	const [error, setError] = useState("");
	const [user, setUser] = useState<any>();
	const [loading, setLoading] = useState<boolean>(true);
	const [messageLoading, setMessageLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
	const router = useRouter();

	const { userId } = router.query;

	const fetchUser = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", userId));
			const docs = await getDocs(q);

			if (docs.docs.length === 0) {
				setLoading(false);
			} else {
				const { username, uid } = docs.docs[0].data();
				setUser({ username, uid });
				setLoading(false);
			}
		} catch (error) {
			console.log("ERROR", error);
		}
	};

	const closeModal = () => {
		setModalIsVisible(false);
	};

	useEffect(() => {
		userId && fetchUser();
	}, [userId]);

	const checkForUser = () => {
		if (!currentUser) {
			setTimeout(() => setModalIsVisible(true), 1000);
		}
	};

	const sendMessageHandler = async () => {
		if (messageInput.length < 10) {
			return setError("Your message is too short");
		} else if (messageInput.length > 10) {
			setError("");
			const messageId = generateId();
			setMessageLoading(true);
			try {
				await addDoc(collection(db, "user", `${userId}/messages`), {
					messageId: messageId,
					text: messageInput,
					timestamp: Timestamp.now(),
				});
				setMessageInput("");
				setMessageLoading(false);
				setSuccess(true);
				setTimeout(() => setSuccess(false), 3000);
				checkForUser();
			} catch (error) {
				setError("Sorry, an error occured");
				console.log("ERROR", error);
				setMessageLoading(false);
			}
		}
	};

	if (loading) {
		return <Loader fullscreen={true} />;
	}

	return (
		<div className="bg-darkMain min-h-screen relative">
			<Meta title="Send me an anonymous message on anoni😉" />
			{modalIsVisible && <GetStartedModal closeHandler={closeModal} />}
			<div className="flex flex-col h-screen justify-between">
				<div className="p-4 h-full flex items-center justify-center w-full">
					<div className="px-6 py-8 md:p-8 rounded-lg blurred min-w-84 w-84 md:w-96">
						<div className="flex flex-col items-center mb-10">
							<h2 className="text-purpleMain purple-glow bg-[#a955f70e] inline-block font-bold text-center text-xl md:text-3xl mb-2">
								Send Message
							</h2>
							<p className="text-md md:text-lg text-gray-50 text-center mb-8">
								Send <span className="font-bold">{user?.username}</span> an
								anonymous message
							</p>
							<textarea
								rows={6}
								value={messageInput}
								onChange={(e) => setMessageInput(e.target.value)}
								className="text-gray-100 border border-gray-400 outline-none focus:border-purple-400 p-2 rounded-sm bg-purple-200/30 w-full resize-none"
							/>
							{error && <p className="text-red-500 my-1 text-sm">{error}</p>}
							{success && (
								<p className="text-green-400 my-1 text-sm">
									Your message has been sent successfully
								</p>
							)}
						</div>
						<div className="flex justify-center">
							<button
								onClick={sendMessageHandler}
								className="bg-purpleDark px-6 py-3 text-white rounded flex hover:shadow-md hover:shadow-purple-500/40">
								{messageLoading ? (
									<span className="animate-bounce flex justify-center w-full text-center">
										<BiPaperPlane color="white" size="1.5rem" />
									</span>
								) : (
									<>
										<span className="mr-4">Send Message</span>
										<BiPaperPlane color="white" size="1.5rem" />
									</>
								)}
							</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default SendMessage;
