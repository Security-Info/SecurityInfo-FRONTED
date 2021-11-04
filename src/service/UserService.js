import axios from 'axios';

const USERS_REST_API_URL = 'https://securityinfo-staging.herokuapp.com/user';
const STOLE_REST_API_URL_POST = 'https://securityinfo-staging.herokuapp.com/user/stole';
const USERS_REST_API_URL_LOCAL = 'https://securityinfo-staging.herokuapp.com/user';



class UserService{

    getUsers(){
        return axios.get(USERS_REST_API_URL_LOCAL);

    }

    addStole(stole){
        return axios.post(STOLE_REST_API_URL_POST,stole);

    }
}

export default new UserService();