import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextWrapper } from "../context";
import { Meta } from "../components";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ContextWrapper>
			<>
				<Meta />
				<Component {...pageProps} />
			</>
		</ContextWrapper>
	);
}
