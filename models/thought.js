const { Schema, model } = require("mongoose")
const dateFormat = require("../utils/dateformat")

const thoughtSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      thoughtText: {
        type: String,
        required: true, 
        minlength: 1,
        maxlength: 280,
      },
      createAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
      username: [
      {
        type: String,
        ref: "Required",
      }
    ],
    reactions: [
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

//   userSchema.virtual('friendCount').get(function(){
//       return this.friends.length;
//   });

  const Thought = model("Thought", thoughtSchema)

  module.exports = Thought;
  