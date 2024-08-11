import { Navbar } from '../Navbar';
import { Homepage } from '../home/Homepage';
import { Loginpage } from '../login/Loginpage';
import { Registerpage } from '../register/Registerpage';
import { Grafpage } from '../graficas/Grafpage';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<Registerpage />} />
        <Route
          path="/graficas"
          element={
            <Grafpage />
          }
        />
      </Routes>
    </>
  );
};
