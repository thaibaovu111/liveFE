import axios from "axios";
import Cookies from "js-cookie";

export default function request({ isRequestToken, ...params }) {
  let headers = {};
  if (isRequestToken) headers.secret_token = Cookies.get("secret_token");

  return axios({ ...params, headers });
}
