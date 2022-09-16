import request from "./axios";
import getUrl from "../constants/url";

export default function login(data) {
  return request({
    isRequestToken: false,
    method: "post",
    url: getUrl("login"),
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
}
