import React, { useEffect, useState } from "react";
import { getStudants } from "../../services/api";

const StudantPage = () => {

    const [studants, setStudants] = useState([]);

    const loadData = async () => {
        const response = await getStudants();
        setStudants(response.data.studants);
    }

    useEffect(() => {
        (async () => { loadData() })();
    });

    return (
        <div id="alunos">
            <h1>Alunos</h1>
            <div>
                <table id="cards" className="cards">
                    <thead>
                        <tr id="card-titles" className="card-titles">
                            <td className="table_td_name"> Nome do Professor(a)</td>
                            <td className="table_td_birth"> Data Nasc.</td>
                            <td className="table_td_registry"> Reg.Acad.</td>
                        </tr>
                    </thead>
                    <tbody>
                        {studants.map((studant) => (
                            <tr key={studant._id}>
                                <td>{studant.name}</td>
                                <td>{studant.birth}</td>
                                <td>{studant.registry}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default StudantPage;