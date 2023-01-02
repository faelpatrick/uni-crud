import React, { useState, useEffect } from "react";
import { getCourses } from "../../services/api.js"

const CoursesPage = () => {

    const [courses, setCourses] = useState([]);

    const loadData = async () => {
        const response = await getCourses();
        setCourses(response.data.courses);
    }

    useEffect(() => {
        (async () => await loadData())();
    }, []);

    return (
        <div id="cursos">
            <h1>Lista de Cursos</h1>
            <div className="content_options">
                <span>+ Novo</span>
            </div>

            <table id="cards" className="cards">
                <thead>
                    <tr id="card-titles" className="card-titles">
                        <td className="table_td_name">Nome do Curso</td>
                        <td className="table_td_birth">Funções</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course) => (
                            <tr key={course._id}><td>{course.name}</td><td>Acessar | Editar</td></tr>
                        ))}
                </tbody>

                <tbody></tbody>
            </table>
        </div>
    )
}

export default CoursesPage;