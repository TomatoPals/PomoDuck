import axios from "axios";

const BASEURL = "http://localhost:3001/api/login/";

const userLogin = {
  userLogin: async (email, password) => {
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
