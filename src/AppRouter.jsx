import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import LoginPage from "./pages/Login";
import MainPage from "./pages/MainPage/MainPage";
import CoursesPage from './pages/CoursePages/CoursesPage';
import DisciplinasPage from "./pages/DisciplinePages/DisciplinasPage";
import ProfessorPage from "./pages/ProfessorPages/ProfessorPage";
import StudantPage from "./pages/StudantPages/StudantPage";

const AppRoutes = () => {
    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/uni-crud" element={<MainPage />} />
                <Route exact path="/cursos" element={<CoursesPage />} />
                <Route exact path="/uni-crud/cursos" element={<CoursesPage />} />
                <Route exact path="/disciplinas" element={<DisciplinasPage />} />
                <Route exact path="/uni-crud/disciplinas" element={<DisciplinasPage />} />
                <Route exact path="/professores" element={<ProfessorPage />} />
                <Route exact path="*/professores" element={<ProfessorPage />} />
                <Route  path="/alunos" exact element={<StudantPage />} />
                <Route  path="/uni-crud/alunos" exact element={<StudantPage />} />
                <Route exact path="/uni-crud/alunos/" element={<StudantPage />} />
                <Route exact path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;