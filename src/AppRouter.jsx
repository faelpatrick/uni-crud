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

        // <Router>
        //     <Routes>
        //         <Route  path="/" exact element={<MainPage />} />
        //         <Route  path="/uni-crud" exact element={<MainPage />} />
        //         <Route  path="/cursos" exact element={<CoursesPage />} />
        //         <Route  path="/disciplinas" exact element={<DisciplinasPage />} />
        //         <Route  path="/professores" exact element={<ProfessorPage />} />
        //         <Route  path="/alunos" exact element={<StudantPage />} />
        //         <Route exact path="/login" element={<LoginPage />} />
        //     </Routes>
        // </Router>

           <Router>
            <Routes>
                <Route  path="/"  element={<MainPage />} />
                <Route  path="/uni-crud"  element={<MainPage />} />
                <Route  path="/cursos"  element={<CoursesPage />} />
                <Route  path="/uni-crud/cursos"  element={<CoursesPage />} />
                <Route  path="/disciplinas"  element={<DisciplinasPage />} />
                <Route  path="/professores"  element={<ProfessorPage />} />
                <Route  path="/alunos"  element={<StudantPage />} />
                <Route  path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;