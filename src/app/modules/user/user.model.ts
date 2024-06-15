import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import config from "../../config";
import { TUser } from "./user.interface";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

// Hash the password to secure
userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.dcrypt_salt_round)
  );
  next();
});

// Not sending password field in document

userSchema.post("save", function (doc, next) {
  // set empty value for password and it will not send value in client
  doc.password = "";
  next();
});

export const UserModel = model<TUser>("user", userSchema);
