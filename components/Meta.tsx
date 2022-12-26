import Head from "next/head";
import React from "react";

interface MetaProps {
	title?: string;
}

const Meta = ({ title }: MetaProps) => {
	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/images/anoni.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/images/anoni.png"
			/>

			<link rel="apple-touch-icon" sizes="180x180" href="/images/anoni.png" />
			<link rel="mask-icon" href="/images/anoni.png" color="grey"></link>
			<meta
				name="keywords"
				content="anonymous, anon, messaging, secret message"
			/>
			<meta
				name="description"
				content="Anoni helps you to express your feelings or send a message to your friends, family, and loved ones anonymously for free."
			/>
			<meta
				name="og:title"
				property="og:title"
				content={title ? title : "Anoni - Send and Recieve Anonymous Messages"}
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:image"
				content="https://anoni.vercel.app/images/anoni.png"
			/>
			<meta property="og:url" content="https://anoni.vercel.app/" />
			<meta
				property="og:description"
				content="Anoni helps you to express your feelings or send a message to your friends, family, and loved ones anonymously for free."
			/>
			<title>
				{title ? title : "Anoni - Send and Recieve Anonymous Messages"}
			</title>
		</Head>
	);
};

export default Meta;
