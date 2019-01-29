import axios from "axios";
import { data, headers } from "../data/data";

const baseURL = "http://localhost:3000";

const headersFromResponse = unFormattedData => {
  return unFormattedData.slice(0, 1).split("|");
};

const formatResponse = unFormattedData => {
  return unFormattedData
    .slice(1)
    .map(record => record.split("|"))
    .map(record => {
      return record.reduce((obj, val, index) => {
        obj[headers[index]] = val;
        return obj;
      }, {});
    });
};

const postQueryRequest = async ({ query, genoType }) => {
  try {
    const token = "testSubmit";
    const response = await axios.post(
      `${baseURL}/`,
      { query, genoType },
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
    const headers = headersFromResponse(response.data);
    const data = formatResponse(response.data);
    return { headers, data };
  } catch (error) {
    console.log(error);
  }
};

const filterRequest = async body => {
  console.log("body", JSON.stringify(body));

  try {
    const token = "testFilter";
    const response = await axios.post(`${baseURL}/`, body, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const headers = headersFromResponse(response.data);
    const data = formatResponse(response.data);
    return { headers, data };
  } catch (error) {
    console.log(error);
  }
};
export default { postQueryRequest, filterRequest };
