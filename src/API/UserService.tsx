import axios from "axios";
import { IUser } from "../Interfaces/IUser";

export default class UserService {
  static async getAllUsersOnPage(limit = 10, page = 1) {
    const response = await axios.get('https://retoolapi.dev/eqsQ4S/users', {
      params: {
        _limit: limit,
        _page: page,
      }
    });
    return response;
  }
  
  static async getAllUsers() {
    const response = await axios.get('https://retoolapi.dev/eqsQ4S/users');
    return response;
  }
  
  static async addUser(user: IUser) {
    const response = await axios.post('https://retoolapi.dev/eqsQ4S/users/', user);
    return response;
  }
  
  static async editUser(user: IUser) {
    const response = await axios.put(`https://retoolapi.dev/eqsQ4S/users/${user.id}`, user);
    return response;
  }
  
  static async deleteUser(id: number) {
    const response = await axios.delete(`https://retoolapi.dev/eqsQ4S/users/${id}`);
    return response;
  }
}