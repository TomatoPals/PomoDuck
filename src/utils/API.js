import axios from "axios";
// goes to env-route.js and chooses route based off prod vs dev
const envRoutes = require("../utils/env-routes")[process.env.NODE_ENV];

const PomoDuckBackendAPIs = {
  // createUser is the
  signup: async (firstName, lastName, email, password) => {
    // chooses url on prod vs dev
    const BASEURL = `http://${envRoutes.signup}`;

    try {
      const request = await axios.post(BASEURL, {
        firstName,
        lastName,
        email,
        password
      });
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  getuser: async (userID) => {
    const BASEURL = `http://${envRoutes.getuser}${userID}`;
    try {
      const request = await axios.get(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  remove: async (userID) => {
    const BASEURL = `http://${envRoutes.remove}${userID}`;
    try {
      const request = await axios.delete(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (userID) => {
    const BASEURL = `http://${envRoutes.update}${userID}`;
    try {
      const request = await axios.delete(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  login: async (email, password) => {
    // chooses url on prod vs dev
    const BASEURL = `http://${envRoutes.login}`;

    try {
      const request = await axios.post(BASEURL, {
        email: email,
        password: password
      });
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  logout: async () => {
    // chooses url on prod vs dev
    const BASEURL = `http://${envRoutes.logout}`;

    try {
      const request = await axios.get(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  }
};

export default PomoDuckBackendAPIs;
