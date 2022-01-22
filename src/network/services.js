import axios from "axios";
import { baseUrl, host } from "../config";

axios.defaults.baseURL = `${baseUrl}/user/`;
// axios.defaults.headers = { "Content-Type": "application/json" };

export const GetPageDetails = async ({ setDetails }) => {
  try {
    const response = await axios.post(
      "page",
      {},
      {
        headers: {
          cruspohost: host.value, // replace this with window.location.hostname
        },
      }
    );

    if (response.data.status === 200) {
      console.log(response.data.data);
      return setDetails(response.data.data);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
