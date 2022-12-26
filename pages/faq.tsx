import React from "react";
import { Footer, Navbar } from "../components";

const FAQ = () => {
	return (
		<div className="bg-darkMain min-h-screen relative overflow-hidden">
			<Navbar />
			<div className="container mx-auto px-2 py-6 min-h-[75vh]">
				<h1 className="text-gray-200 text-2xl font-bold">FAQ</h1>
				<h3 className="text-gray-400 text-lg font-medium">
					Here are some of the frequently asked questions about anoni
				</h3>
				<div className="mt-6">
					<h2 className="text-gray-300 text-xl font-semibold">
						What is Anoni?
					</h2>
					<p className="text-gray-200">
						Anoni is an interactive anonymous messaging platform. To get
						started, create an account for free by signing in with Google and
						share your profile link with your friends. Tell them to click on the
						link and complete the task. Now your friends will be able to
						compliment you anonymously. And, the best part, Anoni is free!
					</p>
				</div>
				<div className="mt-6">
					<h2 className="text-gray-300 text-xl font-semibold">
						Can I change my username?
					</h2>
					<p className="text-gray-200">
						Yes, you can change your username but ONLY when you are logged in.
						To change your Anoni username, go to the menu on the app and tap on
						"Change Username" button. It's that simple!
					</p>
				</div>
				<div className="mt-6">
					<h2 className="text-gray-300 text-xl font-semibold">
						Can I know who sent me a message?
					</h2>
					<p className="text-gray-200">
						Because of our policies, we cannot share much information with you
						regarding who sent you a particular message.
					</p>
				</div>
				<div className="mt-6">
					<h2 className="text-gray-300 text-xl font-semibold">
						How does Anoni keep me anonymous?
					</h2>
					<p className="text-gray-200">
						Even if you have an account in Anoni, when you send an anonymous
						message to someone, your data does not leave our server. It makes
						the whole process secure and worries less.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FAQ;
