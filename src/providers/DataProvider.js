import React, { createContext, useState } from "react";

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

