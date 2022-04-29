import { Navigate } from 'react-router-dom';
import { useUser } from '../userContext/UserContext';

export const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};
