import React, { useState } from "react";

export const stole = [
  
  {
    "id" : "1",
    "fecha":"2021-11-02T14:45:15.000+00:00",
    "latitud":0,
    "longitud":0,
    "descripcion":"Una persona vestida de azul acaba de robarme en una bicicleta negro"
    }

  
];

const initialData = { stole };

const DataContext = React.createContext(initialData);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = React.useContext(DataContext);

  return context;
};