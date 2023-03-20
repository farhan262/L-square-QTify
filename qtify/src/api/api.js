// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/genres
// https://qtify-backend-labs.crio.do/album/:slug

import axios from "axios";
const BACKEND_URL = "https://qtify-backend-labs.crio.do";
export const fetchTopSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/top`);
    //   console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
