import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: {
    type: String
  },
  addSong: {
    type: Boolean,
    required: true
  }
})

const songSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  wordAssociation: {
    type: String,
    required: true
  },
  albumCover: {
    type: String,
    default: "URL String of app Logo"
  },
  rank: {
    type: Number,
    min: 1,
    max: 10,
  },
  comments: [commentSchema],
  owner: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}