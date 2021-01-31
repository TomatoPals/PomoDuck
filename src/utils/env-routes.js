module.exports = {
  development: {
    createUser: "localhost:3001/api/user/"
  },
  production: {
    createUser: `${process.env.EXPRESS_SERVICE}:3001/api/user/`
  }
};
