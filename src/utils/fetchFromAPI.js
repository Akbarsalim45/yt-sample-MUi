import axios from "axios";
import {RAPID_API_KEY} from '../../Secrets'
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key":RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchData = async (url) => {
  try{

    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
  }catch(e){
    console.log(e)
  }
};
