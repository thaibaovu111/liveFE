import request from "./axios";
import getUrl from "../constants/url";

export default function register(data) {
  return request({
    isRequestToken: false,
    method: "post",
    url: getUrl("register"),
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
}
