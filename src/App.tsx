import React from "react";
import "./App.css";
import "./index.css";
import "mdb-ui-kit/css/mdb.min.css";
import MainRoutes from "./routes/MainRoutes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import Drawer from "./components/layout/Drawer";

function App() {
    return (
        <ChakraProvider>
            <MainRoutes Header={Header} Footer={Footer} />
        </ChakraProvider>
    );
}

export default App;
