import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.scss";

// import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./i18n";

//providers
import { BrowserRouter } from "react-router-dom";
import { useChainProviders } from "react-flat-providers";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";
import ThemeProvider from "contexts/ThemeProvider";
import LocalizationProvider from "contexts/LocalizationProvider";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "contexts/AuthProvider";

// using chain providers to prevent deep providers nesting
const ChainedProviders = useChainProviders()
	.add(React.StrictMode)
	.add(ReduxProvider, { store })
	.add(AuthProvider)
	.add(HelmetProvider)
	.add(SnackbarProvider)
	.add(ThemeProvider)
	.add(LocalizationProvider)
	.add(BrowserRouter)
	.make();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChainedProviders>
		<App />
	</ChainedProviders>
);
