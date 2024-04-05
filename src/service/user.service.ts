import { User } from "../models/user.models";

export class UserService {

  /** This is just an example */
  static async getUsers(): Promise<User[]> {
    return [
      {
        username: 'valentin-stamate',
        email: 'username@email.com',
      },
      {
        username: 'another-user',
        email: 'another@email.com'
      }
    ];
  }

}
