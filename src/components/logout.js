import Cookies from "js-cookie";

const Logout = () => {
  if (Cookies.get("isLogin")) {
    Cookies.remove("isLogin");
    window.location.href = "/";
  }
};

export default Logout;
