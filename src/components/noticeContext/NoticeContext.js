import { createContext, useState, useContext, useCallback } from "react";
import { getData } from "../services/services";

export const NoticeContext = createContext();

export const NoticeProvider = ({ children }) => {

  const [newNotifCount, setNewNotifCount] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));

  const getCountNewNotice = useCallback(
    () => {
    if (user) {
      getData('getCountNewNotice', {
        user_id: parseInt(user.id)
      })
        .then(res => {
          setNewNotifCount(res.response.count);
        })
    } else {
      setNewNotifCount(null)
    }
  }, [newNotifCount, user]
  )
  return (
    <NoticeContext.Provider value={{ newNotifCount, getCountNewNotice }}>
      {children}
    </NoticeContext.Provider>
  )
};

export const useNotice = () => useContext(NoticeContext);