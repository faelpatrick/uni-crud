import React from "react";

const StudantPage = () => {
    return (
        <div id="alunos">
            <h1>Alunos</h1>
            <div>
                <table id="cards" className="cards">
                    <thead>
                        <tr id="card-titles" className="card-titles">
                            <td className="table_td_name"> Nome do Professor(a)</td>
                            <td className="table_td_birth"> Data Nasc.</td>
                            <td className="table_td_sal"> Salario</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>

            </div>
        </div>
    )
}

export default StudantPage;