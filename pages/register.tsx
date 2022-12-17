import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Footer } from "../components";
import { FaGoogle } from "react-icons/fa";
import { useAppContext } from "../context";

const Register = () => {
	const { signInWithGoogle, currentUser } = useAppContext();
	const router = useRouter();

	// console.log(useAppContext());

	const signIn = async () => {
		try {
			await signInWithGoogle();
		} catch (error) {
			console.log("Error", error);
		}
	};

	useEffect(() => {
		// currentUser && console.log(currentUser);
		currentUser && router.push("/dashboard");
	}, [currentUser]);

	return (
		<div className="bg-darkMain h-screen">
			<div className="flex flex-col h-screen justify-between">
				<div className="h-full flex items-center justify-center w-full">
					<div className="p-8 rounded-lg blurred w-84 md:w-96">
						<div className="flex flex-col items-center mb-10">
							<h2 className="text-purpleMain purple-glow bg-[#a955f70e] inline-block font-bold text-center text-4xl mb-2">
								anoni
							</h2>
							<p className="text-lg text-gray-400 text-center">
								Sign In to Anoni
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
