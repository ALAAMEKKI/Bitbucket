import axios from 'axios';



const BASE_URL = process.env.REACT_APP_API_URL

let API = {};

API.agents = {
    get : function () {
        return axios.get(BASE_URL+"/api/v1/agents")
    }
}


export default API;