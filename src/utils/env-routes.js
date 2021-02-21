module.exports = {
  development: {
    // user
    signup: "http://localhost:3001/api/user/signup/",
    getuser: "http://localhost:3001/api/user/getuser/",
    remove: "http://localhost:3001/api/user/remove/",
    update: "http://localhost:3001/api/user/update/",
    updateprofile: "http://localhost:3001/api/user/updateprofile/",
    login: "http://localhost:3001/api/userSession/login/",
    logout: "localhost:3001/api/userSession/logout/",
    // task
    createtask: "http://localhost:3001/api/task/createtask/",
    gettask: "http://localhost:3001/api/task/gettask/",
    taskremove: "http://localhost:3001/api/task/taskremove/",
    taskupdate: "http://localhost:3001/api/task/taskupdate/",
    findtasks: "http://localhost:3001/api/task/findtasks/"
  },
  production: {
    // user
    signup: "https://pomoduck.com/api/user/signup/",
    getuser: "https://pomoduck.com/api/user/getuser/",
    remove: "https://pomoduck.com/api/user/remove/",
    update: "https://pomoduck.com/api/user/update/",
    updateprofile: "https://pomoduck.com/api/user/updateprofile/",
    login: "https://pomoduck.com/api/userSession/login/",
    logout: "https://pomoduck.com/api/userSession/logout/",
    // task
    createtask: "https://pomoduck.com/api.task/createtask",
    gettask: "https://pomoduck.com/api.task/gettask",
    taskremove: "https://pomoduck.com/api.task/taskremove",
    taskupdate: "https://pomoduck.com/api.task/taskupdate",
    findtasks: "https://pomoduck.com/api.task/findtasks/"
  }
};
