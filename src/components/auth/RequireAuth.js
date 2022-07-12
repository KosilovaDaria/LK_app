import { useLocation, Navigate } from 'react-router-dom'

const RequireAuth = (props) => {
  const location = useLocation();

  if (!localStorage.getItem('user')) {
    return <Navigate to="/signin" state={{ from: location }} />
  }
  return props.children
}
export default RequireAuth;