import { Navigate, useLocation } from 'react-router-dom';


export const PrivateRoute = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to='/login' />;
};