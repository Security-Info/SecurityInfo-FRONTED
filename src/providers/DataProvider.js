import React, { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const stole = 
  
  {
    id : "1",
    fecha:"2021-11-02T14:45:15.000+00:00",
    latitud:0,
    longitud:0,
    descripcion:"dudu"
    }


  




export const DataProvider = ({ children }) => {
  const [datos, setDatos] = useState(stole);


  return <DataContext.Provider value={{datos,setDatos}}>{children}</DataContext.Provider>;

};


export class ApiLookup{

    static setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";path=/";
    }

    static getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
//method = GET / POST / PUT
    static lookup(method,endpoint,callback,data){

        const headers={
            "Content-Type":"application/json",
            "Authentication":"Bearer "+this.getCookie('logToken'),
            "Access-Control-Allow-Origin": "http://localhost:3000"
        }

        const BASE_URL = "https://securityinfo-staging.herokuapp.com/"

        console.log(data);

        axios({
            method:method,
            headers:headers,
            url: BASE_URL + endpoint,
            data:data
        }).then((data)=>callback(data)).catch((error)=>(console.log(error)))

        axios.defaults.headers.common['Authorization'] = "Bearer "+this.getCookie('logToken');
    }
}

