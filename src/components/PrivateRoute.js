import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isLogin }) {
  return isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
