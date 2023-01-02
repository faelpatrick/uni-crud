import React, { useState } from "react";
import "./styles.css";

import logo01 from "../../images/logo01.png";
import logo02 from "../../images/logo02.png";

import LoginPage from "../LoginPage/Login";
import CoursesPage from "../CoursePages/CoursesPage";
import DisciplinasPage from "../SubjectPages/SubjectPage";
import ProfessorPage from "../ProfessorPages/ProfessorPage";
import StudantPage from "../StudantPages/StudantPage";
import WelcomePage from "../WelcomePage/WelcomePage";

const MainPage = () => {
    const [handleContent, setContent] = useState(<CoursesPage />);

    const loadPage = (pageToLoad) => {
        switch (pageToLoad) {
            case 'home':
                setContent(<WelcomePage />);
                break;
            case 'course':
                setContent(<CoursesPage />);
                break;
            case 'subject':
                setContent(<DisciplinasPage />);
                break;
            case 'professor':
                setContent(<ProfessorPage />);
                break;
            case 'student':
                setContent(<StudantPage />)
                break;
            default: setContent(<LoginPage />);
                break;
        }
    }

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
                    <li onClick={() => loadPage('home')}>Home</li>
                    <li onClick={() => loadPage('course')}>Cursos</li>
                    <li onClick={() => loadPage('subject')}>Disciplinas</li>
                    <li onClick={() => loadPage('professor')}>Professores</li >
                    <li onClick={() => loadPage('student')}>Alunos</li >
                </ul >

            </nav >

            <div id="content" className="content">
                {handleContent}
            </div>

        </div >
    );
}
export default MainPage;