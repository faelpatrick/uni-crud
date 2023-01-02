import React, { useEffect, useState } from "react";
import { getProfessors } from "../../services/api";

const ProfessorPage = () => {
    const [professors, setProfessors] = useState([]);

    const loadData = async () => {
        const response = await getProfessors();
        setProfessors(response.data.professors);
    }

    useEffect(() => {
        (async () => await loadData())();
    });

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
                <tbody>
                    {
                        professors.map((professor) => (
                            <tr key={professor._id}>
                                <td>{professor.name}</td>
                                <td>{professor.birth}</td>
                                <td>{professor.salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProfessorPage;