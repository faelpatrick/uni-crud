import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000',

});

export const getCourses = async () => {
    let url = `/courses/`
    return api.get(url);
}


export const getOneCourse = async (_id, query) => {
    let url = `/courses/${_id}/`

    if (query !== '') {
        url += `?q=${query}`;
    }

    return api.get(url);
}

// Subjects

export const getSubjects = async () => {
    let url = `/subjects/`
    return api.get(url);
}


// professor

export const getProfessors = async () => {
    let url = `/professors/`
    return api.get(url);
}


// Studant

export const getStudants = async () => {
    let url = `/studants/`
    return api.get(url);
}