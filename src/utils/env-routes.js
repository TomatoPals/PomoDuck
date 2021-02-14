module.exports = {
  development: {
    // user
    signup: "localhost:3001/api/user/signup/",
    getuser: "localhost:3001/api/user/getuser/",
    remove: "localhost:3001/api/user/remove/",
    update: "localhost:3001/api/user/update/",
    updateprofile: "localhost:3001/api/user/updateprofile/",
    login: "localhost:3001/api/userSession/login/",
    logout: "localhost:3001/api/userSession/logout/",
    // task
    createtask: "localhost:3001/api/task/createtask/",
    gettask: "localhost:3001/api/task/gettask/",
    taskremove: "localhost:3001/api/task/taskremove/",
    taskupdate: "localhost:3001/api/task/taskupdate/",
    findtasks: "localhost:3001/api/task/findtasks/"
  },
  production: {
    // user
    signup: "pomoduck.com/api/user/signup/",
    getuser: "pomoduck.com/api/user/getuser/",
    remove: "pomoduck.com/api/user/remove/",
    update: "pomoduck.com/api/user/update/",
    updateprofile: "pomoduck.com/api/user/updateprofile/",
    login: "pomoduck.com/api/userSession/login/",
    logout: "pomoduck.com/api/userSession/logout/",
    // task
    createtask: "pomoduck.com/api.task/createtask",
    gettask: "pomoduck.com/api.task/gettask",
    taskremove: "pomoduck.com/api.task/taskremove",
    taskupdate: "pomoduck.com/api.task/taskupdate",
    findtasks: "pomoduck.com/api.task/findtasks"
  }
};
