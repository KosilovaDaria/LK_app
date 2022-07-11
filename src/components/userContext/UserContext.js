import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // console.log('UserProvider')
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem('user'));
  const name = userInfo ? (userInfo.lastname + ' ' + userInfo.firstname + ' ' + userInfo.surname) : null;

  //при загрузке приложения контекст будет доставлять юзера во все необходимые компоненты
  //если юзер есть в локалсторедже тогда сразу показывается главная и выводится юзер страница
  //если сторедж пустой то юзер будет пустой и уйдет запрос на сервер

  const getCurrentUser = () => {
    // console.log('getCurrentUser')
    if (userInfo) {
      setUser(userInfo);
      setUserName(name);
      setLoading(false);
      navigate('/apartments');
    } else {
      setLoading(false);
      setUser(null);
      navigate('/signin');
    }
  };

  const getUserName = () => {
     setUserName(name);
  }

  const logOut = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  }
  return (
    <UserContext.Provider value={{ user, userName, setUser, getUserName, getCurrentUser, logOut, loading, auth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
