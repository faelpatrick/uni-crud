import React from "react";
import "./style.css";
import logo01 from "./../../images/logo01.png";
import logo02 from "./../../images/logo02.png";

const MainPage = () => {
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
                    <li>Cursos</li>
                    <li>Disciplinas</li>
                    <li>Professores</li>
                    <li>Alunos</li>
                </ul>

            </nav>

            <div id="content" >
                <h1> Bem Vindo!</h1>
                <h1> Escolha a opção desejanda no menu lateral esquerdo!</h1>
            </div>
        </div>
    );
}
export default MainPage;