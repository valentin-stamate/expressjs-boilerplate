import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {

  static async getUsers(req: Request<any>, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getUsers();

      res.end(JSON.stringify(users));
    } catch (err) {
      next(err);
    }
  }

}
