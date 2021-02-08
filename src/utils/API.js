import axios from "axios";
// goes to env-route.js and chooses route based off prod vs dev
const envRoutes = require("../utils/env-routes")[process.env.NODE_ENV];

const UserAPIs = {
  // createUser is the
  createUser: async (email, password) => {
    // chooses url on prod vs dev
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

export default UserAPIs;
