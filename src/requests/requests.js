import axios from "axios";
import data from "../data/data";

const baseURL = "http://localhost:3000";

export const postQueryRequest = async () => {
  try {
    const response = await axios.get(`${baseURL}`, {
      //   headers: {
      //     authorization: `Bearer ${token}`
      //   }
    });
    return data;
  } catch (error) {
    return data;
  }
};
