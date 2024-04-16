import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#f0e4e4",
    100: "#d6b8b8",
    200: "#bd8c8c",
    300: "#a35f5f",
    400: "#8a3333",
    500: "#700707",
    600: "#580505",
    700: "#400404",
    800: "#280202",
    900: "#100101",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Creepster', cursive`,
    body: `'Nunito', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
