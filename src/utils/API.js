import axios from "axios";
// goes to env-route.js and chooses route based off prod vs dev
const envRoutes = require("../utils/env-routes")[process.env.NODE_ENV];

const PomoDuckBackendAPIs = {
  // createUser is the
  signup: async (firstName, lastName, email, password) => {
    // chooses url on prod vs dev
    const BASEURL = `${envRoutes.signup}`;

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
    const BASEURL = `${envRoutes.getuser}${userID}`;
    try {
      const request = await axios.get(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  remove: async (userID) => {
    const BASEURL = `${envRoutes.remove}${userID}`;
    try {
      const request = await axios.delete(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  updateTotalUserMinutes: async (userID, totalPomSeconds, totalSmallBreakSeconds, totalBigBreakSeconds) => {
    const BASEURL = `${envRoutes.update}${userID}`;
    try {
      const request = await axios.put(BASEURL, {
        totalPomSeconds,
        totalSmallBreakSeconds,
        totalBigBreakSeconds
      });
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  updateUserProfile: async (userID, firstName, lastName, email, password) => {
    const BASEURL = `${envRoutes.updateprofile}${userID}`;
    try {
      const request = await axios.put(BASEURL, {
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
  updateDefaultTime: async (userID, pomTime, smallBreakTime, bigBreakTime) => {
    const BASEURL = `${envRoutes.update}${userID}`;
    try {
      const request = await axios.put(BASEURL, {
        pomTime,
        smallBreakTime,
        bigBreakTime
      });
      return request;
    } catch (error) {
      console.log(error);
    }
  },

  login: async (email, password) => {
    // chooses url on prod vs dev
    const BASEURL = `${envRoutes.login}`;

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
    const BASEURL = `${envRoutes.logout}`;

    try {
      const request = await axios.get(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  creatTask: async (userId, taskName, estimatedPoms) => {
    const BASEURL = `${envRoutes.createtask}`;
    try {
      const request = axios.post(BASEURL, {
        userId,
        taskName,
        estimatedPoms
      });
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  taskUpdateMinutes: async (userID, pomMinutes, smallBreakMinutes, bigBreakMinutes) => {
    const BASEURL = `${envRoutes.taskupdate}${userID}`;
    try {
      const request = axios.put(BASEURL, {
        pomMinutes,
        smallBreakMinutes,
        bigBreakMinutes
      });
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  taskRemove: async (taskID) => {
    const BASEURL = `${envRoutes.taskremove}${taskID}`;
    try {
      const request = await axios.delete(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  findAllTasks: async (userId) => {
    const BASEURL = `${envRoutes.findtasks}${userId}`;
    try {
      const request = await axios.get(BASEURL);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  taskUpdate: async (taskID, taskName, estimatedPoms, isComplete) => {
    const BASEURL = `${envRoutes.taskupdate}${taskID}`;
    try {
      const request = await axios.put(BASEURL, { taskName, estimatedPoms, isComplete });
      return request;
    } catch (error) {
      console.log(error);
    }
  }
};

export default PomoDuckBackendAPIs;
