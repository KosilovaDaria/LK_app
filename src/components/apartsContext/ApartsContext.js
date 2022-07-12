import { createContext, useState, useContext } from "react";
import { getData } from "../services/services";

export const ApartsContext = createContext();

export const ApartsProvider = ({ children }) => {
  const [apartList, setApartList] = useState(null);
  const [loading, setLoading] = useState(true);

  const getApartList = () => {
    // console.log('getApartList')
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);
    if (user) {
      getData('getAparts', {
        user_id: parseInt(user.id)
      })
        .then(res => {
          setApartList(res.response);
          
        })
    } else {
      // setLoading(false);
      setApartList(null);
    }
  }

  return (
    <ApartsContext.Provider value = {{apartList, setApartList,getApartList, loading}}>
      {children}
    </ApartsContext.Provider>
  )
};

export const useAparts = () => useContext(ApartsContext);