import { createContext, useState, useContext } from "react";

export const ApartContext = createContext();

export const ApartProvider = ({children}) => {
  const [apartments, setApartments] = useState([]);

  const getApartmentsInfo = () => {
    if (localStorage.getItem('user')) {
      setApartments()
    }
  }
  return (
    <ApartContext.Provider value={{ getApartmentsInfo }}>
      {children}
    </ApartContext.Provider>
  );
}
export const useAparts = () => useContext(ApartContext);
