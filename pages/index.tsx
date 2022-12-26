import Head from "next/head";
import { Banner, Footer, Navbar } from "../components";
import { BiMask, BiLockAlt } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
// import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={`bg-darkMain min-h-screen relative overflow-hidden`}>
			<Navbar />
			<main>
				<Banner />
				<div className=" mt-8 py-5 bg-neutral-800">
					<div className="container mx-auto px-2">
						<div className="mb-8">
							<h3 className="text-gray-100 text-2xl md:text-3xl mb-2 text-center font-bold">
								Why use Anoni
							</h3>
							<p className="text-gray-400 text-md md:text-lg mb-6 text-center">
								Some wonderful features of our Anonymous Messaging App
							</p>
						</div>
						<div>
							<div className="flex flex-col md:flex-row max-w-5xl mx-auto space-y-5 md:space-y-0 md:space-x-5 px-6">
								<div className="bg-darkLight p-4 rounded flex flex-col items-center ">
									<div>
										<BiMask color="#a855f7" size="3rem" />
									</div>
									<h4 className="text-xl font-semibold text-gray-100 mb-2 mt-4">
										Anonymity
									</h4>
									<p className="text-md md:text-lg text-gray-300 text-center">
										Our Platform ensures your privacy so that you stay anonymous
										everytime you send someone a secret message. You are
										anonymous until you ever choose to reveal your identity.
									</p>
								</div>
								<div className="bg-darkLight p-4 rounded flex flex-col items-center ">
									<div>
										<BsStars color="#a855f7" size="3rem" />
									</div>
									<h4 className="text-xl font-semibold text-gray-100 mb-2 mt-4">
										Easy To Use
									</h4>
									<p className="text-md md:text-lg text-gray-300 text-center">
										We are constantly working on Anoni as a platform to make it
										as user friendly as possible. As of now you can just
										download our app, fill in your username & pass to get
										started.
									</p>
								</div>
								<div className="bg-darkLight p-4 rounded flex flex-col items-center ">
									<div>
										<BiLockAlt color="#a855f7" size="3rem" />
									</div>
									<h4 className="text-xl font-semibold text-gray-100 mb-2 mt-4">
										Safe & Secure
									</h4>
									<p className="text-md md:text-lg text-gray-300 text-center">
										Safety of our users using this anonymous messaging platform
										is very important for us. We have got reporting systems so
										that you can report anything that you do not like to see.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
