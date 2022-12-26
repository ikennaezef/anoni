import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../context";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
	const [changeNav, setChangeNav] = useState<boolean>(false);
	const [navOpen, setNavOpen] = useState<boolean>(false);
	const { currentUser, logOut } = useAppContext();
	const router = useRouter();

	const changeUsernameHandler = () => {
		setNavOpen(false);
		router.push("/change_username?new_user=false");
	};

	const checkNav = () => {
		if (window.scrollY >= 80) {
			setChangeNav(true);
		} else {
			setChangeNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkNav);
	}, []);

	return (
		<nav
			className={`transition duration-500 ease-in-out px-2 md:px-6 py-4 md:py-8 border-b-2 border-gray-600 ${
				changeNav && "nav_sticky"
			}`}>
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<Link href="/">
						<div>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								a
							</span>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								n
							</span>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								o
							</span>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								n
							</span>
							<span className="text-purpleMain purple-glow font-bold text-2xl md:text-4xl">
								i
							</span>
						</div>
					</Link>
				</div>
				<div className="hidden space-x-5 md:flex md:items-center">
					{!currentUser ? (
						<>
							<Link href="/register">
								<p className="text-gray-200 text-lg hover:underline hover:decoration-purpleMain">
									Get Started
								</p>
							</Link>
							<Link href="/faq">
								<p className="text-gray-200 text-lg hover:underline hover:decoration-purpleMain">
									FAQ
								</p>
							</Link>
						</>
					) : (
						<>
							<Link href="/dashboard">
								<p className="text-gray-200 text-lg hover:underline hover:decoration-purpleMain">
									Dashboard
								</p>
							</Link>
							<Link href="/faq">
								<p className="text-gray-200 text-lg hover:underline hover:decoration-purpleMain">
									FAQ
								</p>
							</Link>
							<button
								onClick={logOut}
								className="bg-purpleMain text-white rounded px-6 py-2 text-md md:text-xl cursor-pointer hover:bg-purpleDark">
								Logout
							</button>
						</>
					)}
				</div>
				{/* ------ MOBILE MENU ------- */}
				<button onClick={() => setNavOpen(true)} className="block md:hidden">
					<AiOutlineMenu color="white" fontSize="1.5rem" />
				</button>
				<div
					className={`md:hidden absolute z-10 h-screen w-full top-0 ${
						navOpen ? "right-0" : "-right-full"
					}`}>
					<div className="bg-gray-800/95 h-full w-full p-10 relative flex items-center justify-center">
						<button
							onClick={() => setNavOpen(false)}
							className="absolute top-4 right-5 p-3 text-white">
							<IoCloseOutline color="inherit" fontSize="1.5rem" />
						</button>
						<div className="flex flex-col items-center pt-8">
							{!currentUser ? (
								<>
									<Link href="/register">
										<button className="text-white text-lg mb-4 hover:underline hover:decoration-purpleMain">
											Get Started
										</button>
									</Link>
									<Link href="/faq">
										<button className="text-white text-lg hover:underline hover:decoration-purpleMain">
											FAQ
										</button>
									</Link>
									<Link href="/register">
										<button className="inline-block bg-purpleDark text-white rounded px-6 py-3 mt-16 text-lg cursor-pointer hover:bg-purpleDark">
											Login
										</button>
									</Link>
								</>
							) : (
								<>
									<Link href="/dashboard">
										<button className="text-white text-lg mb-4 hover:underline hover:decoration-purpleMain">
											Dashboard
										</button>
									</Link>
									<button
										onClick={changeUsernameHandler}
										className="text-white text-lg mb-4 hover:underline hover:decoration-purpleMain">
										Change Username
									</button>
									<Link href="/faq">
										<button className="text-white text-lg hover:underline hover:decoration-purpleMain">
											FAQ
										</button>
									</Link>
									<button
										onClick={logOut}
										className="inline-block bg-purpleDark text-white rounded px-6 py-3 mt-16 text-lg cursor-pointer hover:bg-purpleDark">
										Sign Out
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
