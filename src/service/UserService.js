import axios from 'axios';

const USERS_REST_API_URL = 'https://securityinfo-staging.herokuapp.com/user';
const STOLE_REST_API_URL_POST = 'https://securityinfo-staging.herokuapp.com/user/stole';
const USERS_REST_API_URL_LOCAL = 'https://securityinfo-staging.herokuapp.com/user';
const LOGIN_REST_API_URL_LOCAL = 'https://securityinfo-staging.herokuapp.com/securityInfo/auth/user';
const ALL_STOLE = 'https://securityinfo-staging.herokuapp.com/user/allStole';



class UserService{

    postLogin(){
        return axios.post(LOGIN_REST_API_URL_LOCAL)
    }

    addUser(user){
        return axios.post(USERS_REST_API_URL_LOCAL,user);

    }

    getUsers(){
        return axios.get(USERS_REST_API_URL_LOCAL);

    }

    getAllZones(){
        return axios.get(ALL_STOLE);
    }

    addStole(stole){
        return axios.post(STOLE_REST_API_URL_POST,stole);

    }
}

export default new UserService();