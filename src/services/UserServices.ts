import { UserInterface, UserModel } from "../DB/models/usersModel";

export class UserService {
  static async registerUser(user: UserInterface) {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  static async patchUser(user: UserInterface, id: string) {
    const newUser = await UserModel.findByIdAndUpdate(id, user);
    return newUser;
  }

  static async delUser(id: string) {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    return deletedUser;
  }
}
