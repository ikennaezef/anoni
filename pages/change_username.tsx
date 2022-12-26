import {
	collection,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Footer } from "../components";
import { useAppContext } from "../context";
import { db } from "../firebase/config";
import { setToStorage } from "../utils/localStorage";
import { FaSpinner } from "react-icons/fa";

type Props = {};

const ChangeUsername = (props: Props) => {
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState<boolean>(false);

	const router = useRouter();
	const { new_user } = router.query;

	const { currentUser, setCurrentUser } = useAppContext();

	const usernameHandler = async () => {
		if (username.length < 4) {
			return setError("The username should be at least 4 characters long");
		} else {
			setLoading(true);
			setError(null);
			try {
				const userQuery = query(
					collection(db, "users"),
					where("uid", "==", currentUser.uid)
				);
				const userDoc = await getDocs(userQuery);
				userDoc.forEach(async (uDoc) => {
					const updatedata = await updateDoc(uDoc.ref, {
						username: username,
					});
					setCurrentUser({ ...currentUser, username });
					setToStorage("currentUser", { ...currentUser, username });
					setLoading(false);
					setSuccess("Username change successful");
					setTimeout(() => {
						router.push("/dashboard");
					}, 1000);
				});
			} catch (error) {
				setLoading(false);
				setError("An error occured");
				console.log("ERROR", error);
			}
		}
	};

	return (
		<div className="bg-darkMain h-screen">
			<div className="flex flex-col h-screen justify-between">
				<div className="p-4 h-full flex items-center justify-center w-full">
					<div className="p-6 border border-purple-300 rounded-md max-w-sm">
						{new_user === "true" ? (
							<>
								<h2 className="text-purpleMain text-xl font-semibold mb-4">
									One more thing...
								</h2>
								<p className="text-gray-200">
									Before you continue, set your username. This is the name your
									friends will see while writing their messages.
								</p>
							</>
						) : (
							<>
								<h2 className="text-purpleMain text-xl font-semibold mb-6">
									Change Username
								</h2>
							</>
						)}
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
							{success && (
								<p className="text-green-400 my-1 text-sm">{success}</p>
							)}
							<div className="flex justify-between space-x-4 mt-6">
								<button
									disabled={loading}
									onClick={usernameHandler}
									className="bg-purpleDark text-white rounded-sm px-4 py-2 mt-3 min-w-[7rem] text-center">
									{loading ? (
										<span className="animate-spin flex justify-center w-full text-center">
											<FaSpinner color="inherit" />
										</span>
									) : (
										"Set Username"
									)}
								</button>
								{new_user === "false" && (
									<Link href="/dashboard">
										<button className="bg-transparent text-purpleMain border border-purpleMain rounded-sm px-4 py-2 mt-3">
											Cancel
										</button>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default ChangeUsername;
