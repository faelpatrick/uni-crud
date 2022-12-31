import React, { useState } from "react";
import "./styles.css";

import logo01 from "../../images/logo01.png";
import logo02 from "../../images/logo02.png";

import CoursesPage from "../CoursePages/CoursesPage";
import DisciplinasPage from "../DisciplinePages/DisciplinasPage";
import ProfessorPage from "../ProfessorPages/ProfessorPage";
import StudantPage from "../StudantPages/StudantPage";
import WelcomePage from "../WelcomePage/WelcomePage";

const MainPage = () => {

    const [handleContent, setContent] = useState(<WelcomePage />)
    const loadPageCourse = () => { setContent(<CoursesPage />) }
    const loadPageSubject = () => { setContent(<DisciplinasPage />) }
    const loadPageProffessor = () => { setContent(<ProfessorPage />) }
    const loadPageStudant = () => { setContent(<StudantPage />) }

    return (
        <div id="all-content">
            <nav id="sideBar">
                <div id="logoSideBar">
                    <img src={logo01} alt="logo01" />
                </div>

                <div id="logoSideBar">
                    <img src={logo02} alt="logo02" />
                </div>

                <ul>
                    <li onClick={loadPageCourse}>Cursos</li>
                    <li onClick={loadPageSubject}>Disciplinas</li>
                    <li onClick={loadPageProffessor}>Professores</li >
                    <li onClick={loadPageStudant}>Alunos</li >
                </ul >

            </nav >

            <div id="content" className="content">

                {handleContent}
            </div>
        </div>
    );
}
export default MainPage;