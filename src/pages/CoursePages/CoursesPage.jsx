import React from "react";

const CoursesPage = () => {
     return (
        <div id="cursos">
            <h1>Cursos</h1>
            <h1>Lista de Cursos</h1>

            <table id="cards" className="cards">
                <thead>
                    <tr id="card-titles" className="card-titles">
                        <td className="table_td_name">Nome do Curso</td>
                        <td className="table_td_birth">Funções</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default CoursesPage;