module.exports = {
  development: {
    createUser: "localhost:3001/api/user/signup"
  },
  production: {
    createUser: "pomoduck.com/api/user/signup"
  }
};
