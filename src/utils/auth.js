import Cookies from "js-cookie";

const validateLogin = () => Boolean(Cookies.get("isLogin"));

export default validateLogin;
