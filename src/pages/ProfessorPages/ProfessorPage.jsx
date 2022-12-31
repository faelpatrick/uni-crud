import React from "react";

const ProfessorPage = () => {
    return (
        <div id="professores">
            <h1>Professores</h1>

            <table id="cards" className="cards">
                <thead>
                    <tr id="card-titles" className="card-titles">
                        <th className="table_td_name">Nome do Professor(a)</th>
                        <th className="table_td_birth">Data Nasc.</th>
                        <th className="table_td_sal">Salario</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default ProfessorPage;