import axios from 'axios'

export default class Api{
    GetAll(type: string, page = 1) {
        return page == 1 ? 
            axios.get(`https://swapi.dev/api/${type}`) :
            axios.get(`https://swapi.dev/api/${type}/?page=${page}`)
    }
    GetById(url: string, id: string) {
        return axios.get(`https://swapi.dev/api/${url}/${id}`);
    }
}