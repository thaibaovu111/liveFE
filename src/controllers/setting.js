import request from "./axios";
import getUrl from "../constants/url";

export default function setting(data) {
  return request({
    isRequestToken: true,
    method: "post",
    url: getUrl("settings"),
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
}
