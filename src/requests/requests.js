import axios from "axios";
import { unformattedData } from "../data/data";

const baseURL = "http://localhost:3001";

//Format the "|" response
const formatResponse = unFormattedData => {
  const headers = unFormattedData.slice(0, 1)[0].split("|");
  const data = unFormattedData
    .slice(1)
    .map(record => record.split("|"))
    .map(record => {
      return record.reduce((obj, val, index) => {
        obj[headers[index]] = val;
        return obj;
      }, {});
    });
  return { data, headers };
};

const postQueryRequest = async ({ query, genoType }) => {
  const body = { query, genoType };
  try {
    const token = "testSubmit";
    const response = await axios.post(`${baseURL}/`, body, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    // To uncomment when connected to backend:
    // const payload = formatResponse(response.data);

    // Dummy response - To be deleted when connected to backend:
    const payload = formatResponse(unformattedData);
    return payload;
  } catch (error) {
    console.log(error);
    // Dummy response - To be deleted when connected to backend:
    const payload = formatResponse(unformattedData);
    return payload;
  }
};

const filterRequest = async body => {
  const { query, genoType, filter } = { ...body };
  try {
    const token = "testFilter";
    const response = await axios.post(
      `${baseURL}/`,
      { query, genoType, filter },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
    // To uncomment when connected to backend:
    // const payload = formatResponse(response.data);

    // Dummy response - To be deleted when connected to backend:
    const payload = formatResponse(unformattedData);
    return payload;
  } catch (error) {
    console.log(error);
    // Dummy response - To be deleted when connected to backend:
    const payload = formatResponse(unformattedData);
    return payload;
  }
};
export default { postQueryRequest, filterRequest };
