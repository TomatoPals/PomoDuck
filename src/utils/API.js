import axios from "axios";

const BASEURL = "localhost:3001/api/user/";

const userLogin = {
  userLogin: (input) =>
    axios.get(`${BASEURL}${input}`).then((res) => res.data.results)
};

export default userLogin;
