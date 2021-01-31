import axios from "axios";

// const BASEURL = "http://localhost:3001/api/login/";
const DEVURL = "http://localhost";
// const PRODURL = process.env.EXPRESS_SERVICE;
const API_ROUTE = "/api/user/";
const PORT = "3001";

const userLogin = {
  userLogin: async (email, password) => {
    const BASEURL = `${DEVURL}:${PORT}${API_ROUTE}`;
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
