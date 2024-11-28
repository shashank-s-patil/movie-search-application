import React from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Layout/Navbar/Navbar";
import { Footer } from "./components/Layout/Footer/Footer";

export const AppRouter = () => {

    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/movie/:id" element={<MoviePage/>} />
            </Routes>
            <Footer/>
        </>
    );
};