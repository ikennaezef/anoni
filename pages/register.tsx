import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "../components";
import { FaGoogle } from "react-icons/fa";
import { useAppContext } from "../context";

const Register = () => {
	const [calledPush, setCalledPush] = useState<boolean>(false);
	const { signInWithGoogle, currentUser } = useAppContext();
	const router = useRouter();

	const signIn = async () => {
		try {
			await signInWithGoogle();
		} catch (error) {
			console.log("Error", error);
		}
	};

	useEffect(() => {
		if (currentUser) {
			if (calledPush) {
				return;
			}
			router.push("/dashboard");
			setCalledPush(true);
		}
	}, [currentUser]);

	return (
		<div className="bg-darkMain h-screen">
			<div className="flex flex-col h-screen justify-between">
				<div className="p-4 h-full flex items-center justify-center w-full">
					<div className="px-2 py-8 md:p-8 rounded-lg blurred w-84 md:w-96">
						<div className="flex flex-col items-center mb-10">
							<h2 className="text-purpleMain purple-glow bg-[#a955f70e] inline-block font-bold text-center text-3xl mb-2">
								anoni
							</h2>
							<p className="text-lg text-gray-50 text-center font-bold mb-4">
								Sign In to Anoni
							</p>
							<p className="text-lg text-gray-400 text-center">
								Recieve anonymous compliments from your friends and send
								anonymous messages to your friends for free.
							</p>
						</div>
						<div className="flex justify-center">
							<button
								onClick={signIn}
								className="bg-purpleDark px-6 py-3 text-white rounded flex hover:shadow-md hover:shadow-purple-500/40">
								<FaGoogle color="white" size="1.5rem" />
								<span className="ml-4">Sign In With Google</span>
							</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Register;
