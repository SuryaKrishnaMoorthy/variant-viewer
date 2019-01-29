import axios from "axios";
import { data, headers } from "../data/data";

const baseURL = "http://localhost:3000";

const postQueryRequest = async () => {
  try {
    const token = "test";
    const response = await axios.get(`${baseURL}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    return data;
  }
};

const filterRequest = async body => {
  console.log("body", JSON.stringify(body));

  try {
    const token = "test";
    const response = await axios.post(`${baseURL}/`, body, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default { postQueryRequest, filterRequest };
