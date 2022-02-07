import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://swapi.dev/api/",
  headers: {
    "Content-Type": "application/JSON",
  },
});

export default class API {
  //people
  static async getAllPeople() {
    let res = await axiosAPI.get("/people");
    return res.data;
  }
  static async getonePeople(id) {
    return await axiosAPI.get("/people/" + id);
  }
}
