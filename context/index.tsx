import React, { useState, createContext, useContext, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import {
	clearFromStorage,
	getFromStorage,
	setToStorage,
} from "../utils/localStorage";
import { UserType } from "../types";

export const useAppContext = () => {
	return useContext<any>(AuthContext);
};

const AuthContext = createContext<any>(null);

type PageProps = {
	children: React.ReactElement;
};

export const ContextWrapper = ({ children }: PageProps) => {
	const [currentUser, setCurrentUser] = useState<UserType | null>();
	const [usernameModal, setUsernameModal] = useState<boolean>(false);

	useEffect(() => {
		getFromStorage("currentUser") &&
			setCurrentUser(getFromStorage("currentUser"));
	}, []);

	const googleProvider = new GoogleAuthProvider();
	const signInWithGoogle = async () => {
		try {
			const res = await signInWithPopup(auth, googleProvider);
			const user = res.user;
			const tempUser = {
				displayName: user.displayName,
				email: user.email,
				uid: user.uid,
			};
			setCurrentUser(tempUser);
			const q = query(collection(db, "users"), where("uid", "==", user.uid));
			const docs = await getDocs(q);
			if (docs.docs.length === 0) {
				await addDoc(collection(db, "users"), {
					uid: user.uid,
					name: user.displayName,
					authProvider: "google",
					email: user.email,
				});
				setUsernameModal(true);
			} else {
				setUsernameModal(false);
				const loggedInUser = docs.docs[0].data();
				const { name, uid, username, email } = loggedInUser;
				setCurrentUser({ displayName: name, uid, username, email });
				setToStorage("currentUser", {
					displayName: name,
					uid,
					username,
					email,
				});
			}
		} catch (err: any) {
			console.error(err);
			alert(err.message);
		}
	};

	const logOut = () => {
		signOut(auth);
		clearFromStorage("currentUser");
		setCurrentUser(null);
	};

	const userIsAuthenticated = () => !!currentUser;

	const values = {
		currentUser,
		setCurrentUser,
		signInWithGoogle,
		logOut,
		userIsAuthenticated,
		usernameModal,
		setUsernameModal,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
