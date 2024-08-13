import { User } from "../models/user.js"
import { Song } from "../models/song.js"

async function index(req, res) {
  const users = await User.find({})
  res.render('users/index', {
    users
  })
}

async function show(req, res) {
  const songs = await Song.find({})
  .populate('owner')
  const selectedUser = await User.findById(req.params.userId)
  res.render('songs/profile', {
    selectedUser,
    songs
  })
}

async function indexE(req,res) {
  const selectedUser = await User.findById(req.params.userId)
  res.render('songs/entourage', {
    selectedUser
  })
}

export {
  index,
  show,
  indexE
}