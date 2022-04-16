const { Schema, model } = require("mongoose")
const dateFormat = require("../utils/dateformat")

const userSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength:280,
      },
      username: [
      {
        type: String,
        required: true, 
      }
    ],
    createAt: [
        {
          type: Date,
          default: Date.now,
          get: timestamp => dateFormat(timestamp)
        }
      ],
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );

//   userSchema.virtual('friendCount').get(function(){
//       return this.friends.length;
//   });

  const User = model("User", userSchema)

  module.exports = User;
  