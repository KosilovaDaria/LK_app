import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { getData } from "../services/services";

export const ApartsContext = createContext();

export const ApartsProvider = ({ children }) => {
  // console.log('apartsContext')
  const [apartList, setApartList] = useState(null);
  const [loading, setLoading] = useState(true);

  const getApartList = (id) => {
    // console.log('getApartList')
    if (localStorage.getItem('user')) {
      getData('getAparts', {
        user_id: parseInt(id)
      })
        .then(res => {
          // localStorage.setItem('apartments', JSON.stringify(res.response))
          setApartList(res.response);
          // setLoading(false);
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