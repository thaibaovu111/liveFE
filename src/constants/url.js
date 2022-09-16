const BASE_URL = "https://chich1.com/api/";
const HTTP = "https://chich1.com/live/";
const KEY_STREAM = "NhIXbEMyv";
const TYPE_VIDEO = "application/x-mpegURL";
const LIVE_URL = HTTP + KEY_STREAM;

export default function getUrl(type) {
  const urlDev = {
    login: `${BASE_URL}/login`,
    register: `${BASE_URL}/signup`,
    settings: `${BASE_URL}/settings`,
    liveURL: LIVE_URL,
    typeVideo: TYPE_VIDEO,
  };
  return urlDev[type];
}
