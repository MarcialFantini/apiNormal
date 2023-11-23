import { Schema, model } from "mongoose";

export interface UserInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  address: string;
}

const SchemaUser = new Schema<UserInterface>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
});

export const UserModel = model<UserInterface>("User", SchemaUser);
