import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //при загрузке приложения контекст будет доставлять юзера во все необходимые компоненты
  //если юзер есть в локалсторедже тогда сразу показывается главная и выводится юзер страница
  //если сторедж пустой то юзер будет пустой и уйдет запрос на сервер

  const getCurrentUser = () => {
    if (localStorage.getItem('user')) {
      let object = JSON.parse(localStorage.getItem('user'));
      let name = object ? (object.lastname + ' ' + object.firstname + ' ' + object.surname) : null;
      setUser(object);
      setUserName(name);
      setLoading(false);
      navigate('/apartments')
    } else {
      setLoading(false);
      setUser(null);
      navigate('/signin')
    }
  };

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('apartments');
    navigate('/signin')
  }

  return (
    <UserContext.Provider value={{ user, userName, setUser, getCurrentUser, logOut, loading, auth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
