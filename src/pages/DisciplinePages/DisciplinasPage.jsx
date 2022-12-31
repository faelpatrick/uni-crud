import React from "react";

const DisciplinasPage = () => {
    return (
        <div id="alunos">
            <div id="content_header">
                <div className="content_title"><h1>Disciplinas</h1></div>
                <div className="content_options">
                    <span>+ Novo</span>
                </div>
            </div>
            <div>
                <table id="cards" className="cards">
                    <thead>
                        <tr id="card-titles" className="card-titles">
                            <th>Nome da Disciplina</th>
                            <th>Curso</th>
                            <th>Semestre</th>
                        </tr>
                    </thead>
                    <tbody> </tbody>
                </table>

            </div>
        </div>
    )
}

export default DisciplinasPage;