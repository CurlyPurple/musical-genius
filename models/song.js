import mongoose, { SchemaType } from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: {
    type: String
  },
  author: {type: Schema.Types.ObjectId, ref: 'User'},
},{
    timestamps: true
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
    type: [String],
    required: true
  },
  rank: {
    type: [Number],
    min: 1,
    max: 5,
  },
  owner: 
    [{type: Schema.Types.ObjectId, ref: 'User'}]
  ,
  comments: [commentSchema]
}, {
  timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}