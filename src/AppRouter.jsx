import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import LoginPage from "./pages/LoginPage/Login";
import MainPage from "./pages/MainPage/MainPage";
import CoursesPage from './pages/CoursePages/CoursesPage';
import SubjectPage from "./pages/SubjectPages/SubjectPage";
import ProfessorPage from "./pages/ProfessorPages/ProfessorPage";
import StudantPage from "./pages/StudantPages/StudantPage";

const AppRoutes = () => {
    return (

        <Router>
            <Routes>
                <Route  path="/" exact element={<MainPage />} />
                <Route  path="/uni-crud" exact element={<MainPage />} />
                <Route  path="/cursos" exact element={<CoursesPage />} />
                <Route  path="/disciplinas" exact element={<SubjectPage />} />
                <Route  path="/professores" exact element={<ProfessorPage />} />
                <Route  path="/alunos" exact element={<StudantPage />} />
                <Route  path="/login" exact element={<LoginPage />} />
                <Route  path="/uni-crud/login" exact element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;