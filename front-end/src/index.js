import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/bebas-neue";
import "./styles/index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
