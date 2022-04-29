import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //при загрузке приложения контекст будет доставлять юзера во все необходимые компоненты
  //если юзер есть в локалсторедже тогда сразу показывается главная и выводится юзер страница
  //если сторедж пустой то юзер будет пустой и уйдет запрос на сервер

  const getCurrentUser = () => {
    if (localStorage) {
      let object = JSON.parse(localStorage.getItem('user'));
      setUser(object);
      setLoading(false);
      navigate('/apartments')
    } else {
      setLoading(false);
      setUser(null);
    }
  };

  const logOut = () => {
    localStorage.removeItem('user');
    navigate('/signin')
  }

// console.log(user)

  return (
    <UserContext.Provider value={{ user, setUser, getCurrentUser, logOut, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
