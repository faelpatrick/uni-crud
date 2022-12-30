import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import LoginPage from "./pages/Login";
import MainPage from "./pages/MainPage/MainPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;