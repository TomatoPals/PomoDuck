import axios from "axios";
const envRoutes = require("../utils/env-routes")[process.env.NODE_ENV];

const CreateUser = {
  createUser: async (email, password) => {
    const BASEURL = `http://${envRoutes.createUser}`;

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

export default CreateUser;
