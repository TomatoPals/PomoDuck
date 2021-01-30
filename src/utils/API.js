import axios from "axios";

// const BASEURL = "http://localhost:3001/api/login/";
const DEVURL = "http://localhost";
// const PRODURL = process.env.PROD_URL;
const API_ROUTE = "/api/login/";
const PORT = "3001";

const userLogin = {
  userLogin: async (email, password) => {
    const BASEURL = `${DEVURL}:${PORT}${API_ROUTE}`;
    console.log(BASEURL);
    try {
      const request = await axios.post(BASEURL, {
        email: email,
        password: password
      });
      return request;
    } catch (error) {
      console.log(error);
    }
  }
};

export default userLogin;
