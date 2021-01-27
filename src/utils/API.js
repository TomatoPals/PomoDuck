import axios from "axios";

const BASEURL = "http://localhost:3001/api/login/";

const userLogin = {
  userLogin: (email, password) =>
    axios.post(BASEURL, { email: email, password: password }).then((res) => res)
};

export default userLogin;
