import React from "react";

import "./styles.css";
import logo01 from "../../images/logo01.png";
import logo02 from "../../images/logo02.png";

const MenuBar = () => {
    return (

        <nav id="sideBar">
                <div id="logoSideBar">
                    <img src={logo01} alt="logo01" />
                </div>

                <div id="logoSideBar">
                    <img src={logo02} alt="logo02" />
                </div>

                <ul>
                    <li><a href="cursos">Cursos</a></li>
                    <li><a href="disciplinas">Disciplinas</a></li>
                    <li><a href="professores">Professores</a></li>
                    <li><a href="alunos">Alunos</a></li>
                </ul>

            </nav>
    )
}

export default MenuBar;