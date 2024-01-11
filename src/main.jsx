import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
	breakpoints: {
		values: { xs: 0, sm: 350, md: 600, lg: 900, xl: 1200 },
	},
  palette: {
    primary: {
      main: "#008080",
      dark: "#045D5D",
      light: "#00ADAD",
    },
  },
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						backgroundColor: "primary.dark",
					},
				},
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
