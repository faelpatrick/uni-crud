import React from "react";
import "./styles.css";
import logo01 from "./../../images/logo01.png";
import logo02 from "./../../images/logo02.png";
import MenuBar from "../MenuBar/MenuBar";

const MainPage = () => {
    return (
        <div id="all-content">
            <MenuBar />

            <div id="content" >
                <h1> Bem Vindo!</h1>
                <h1> Escolha a opção desejanda no menu lateral esquerdo!</h1>
            </div>
        </div>
    );
}
export default MainPage;