const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      username: {
        type: String,
        required: true, 
        unique: true,
        trim: true, 
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must be a valid email address!"]
      },
      thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      }
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        }
      ],
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );

  userSchema.virtual('friendCount').get(function(){
      return this.friends.length;
  });

  const User = model("User", userSchema)

  module.exports = User;
  