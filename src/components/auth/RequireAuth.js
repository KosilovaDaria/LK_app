import { useLocation, Navigate } from 'react-router-dom'
import { useUser } from "../userContext/UserContext";

const RequireAuth = (props) => {
  // const { user } = useUser();

  // const user = true
  const location = useLocation();
  // console.log(auth);

  if (!localStorage.getItem('user')) {
    return <Navigate to="/signin" state={{ from: location }} />
  }

  return props.children
}

export default RequireAuth;