module.exports = {
  development: {
    signup: "localhost:3001/api/user/signup/",
    getuser: "localhost:3001/api/user/getuser/",
    remove: "localhost:3001/api/user/remove/",
    update: "localhost:3001/api/user/update/",
    login: "localhost:3001/api/login/"
  },
  production: {
    signup: "pomoduck.com/api/user/signup/",
    getuser: "pomoduck.com/api/user/getuser/",
    remove: "pomoduck.com/api/user/remove/",
    update: "pomoduck.com/api/user/update/",
    login: "pomoduck.com/api/login/"
  }
};
