import React from "react";
import { useEffect, useState } from "react";
import { getSubjects, getCourses } from "../../services/api";

const DisciplinasPage = () => {

    const [subjects, setSubjects] = useState([]);
    const [courses, setCourses] = useState([]);

    const loadData = async () => {
        const response = await getSubjects();
        setSubjects(response.data.subjects);

        const respCourses = await getCourses();
        setCourses(respCourses.data.courses);
    }

    useEffect(() => {
        (async () => await loadData())();
    }, []);

    const courseList = [];

    courses.map((course) => {
        courseList[course._id] = course.name;
    });


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
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subjects.map((subject) => (
                                <tr key={subject._id}>
                                    <td>{subject.name}</td>
                                    <td>{courseList[subject.course]}</td>
                                    <td>{subject.semester}</td>
                                    <td>Acessar | Editar</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default DisciplinasPage;