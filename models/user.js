import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  friends: [{
    type: Schema.Types.ObjectId, ref: "User"
  }]
})

const User = mongoose.model("User", userSchema)

export {
  User
}