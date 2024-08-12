import mongoose from "mongoose"

const Schema = mongoose.Schema

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
  }
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}