import axios from "axios";
import { unFormattedData } from "../data/data";
// import { data, headers } from "../data/data";

const baseURL = "http://localhost:3000";

const formatResponse = unFormattedData => {
  const headers = unFormattedData.slice(0, 1).split("|");
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
    const payload = formatResponse(response.data);
    return { payload };
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
    const payload = formatResponse(response.data);
    return { payload };
  } catch (error) {
    console.log(error);
  }
};
export default { postQueryRequest, filterRequest };
