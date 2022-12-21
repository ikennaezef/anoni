import {
	collection,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import React, { useState } from "react";
import { useAppContext } from "../context";
import { db } from "../firebase/config";

type Props = {};

const UsernameModal = (props: Props) => {
	const [error, setError] = useState<string | null>(null);
	const [username, setUsername] = useState("");

	const { currentUser, setCurrentUser, setUsernameModal } = useAppContext();

	const usernameHandler = async () => {
		console.log(username, username.length);
		if (username.length < 4) {
			return setError("The username should be at least 4 characters long");
		} else {
			setError(null);
			try {
				const userQuery = query(
					collection(db, "users"),
					where("uid", "==", currentUser.uid)
				);
				const userDoc = await getDocs(userQuery);
				console.log(userDoc.docs[0].data());
				userDoc.forEach(async (uDoc) => {
					const updatedata = await updateDoc(uDoc.ref, {
						username: username,
					});
					setCurrentUser({ ...currentUser, username });
					setUsernameModal(false);
				});
			} catch (error) {
				setError("An error occured");
				console.log("ERROR", error);
			}
		}
	};

	// console.log(new Date());

	return (
		<div className="flex items-center justify-center absolute w-full h-screen bg-gray-800/95 z-20 p-3">
			<div className="p-6 border border-purple-300 rounded-md max-w-sm">
				<h2 className="text-purpleMain text-xl font-semibold mb-4">
					One more thing...
				</h2>
				<p className="text-gray-200">
					Before you continue, set your username. This is the name your friends
					will see while writing their messages.
				</p>
				<div className="mt-5">
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="username..."
						className={`border-b ${
							error ? "border-red-400" : "border-white"
						} w-full bg-transparent text-white outline-none`}
					/>
					{error && <p className="text-red-400 my-1 text-sm">{error}</p>}
					<button
						onClick={usernameHandler}
						className="bg-purpleDark text-white rounded-sm px-4 py-2 mt-3">
						Set Username
					</button>
				</div>
			</div>
		</div>
	);
};

export default UsernameModal;
