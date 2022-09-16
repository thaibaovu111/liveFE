import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components";
import Register from "./components/register";
import Navbar from "./components/navbar";
import Setting from "./components/setting";
import validateLogin from "./utils/auth";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/logout";

const App = () => {
  const isLogin = validateLogin();

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute isLogin={isLogin} />}>
                <Route path="/admin/register" element={<Register />} />
                <Route path="/admin/setting" element={<Setting />} />
                <Route path="/admin/logout" element={<Logout />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
