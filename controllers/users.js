import { User } from "../models/user.js"
import { Song } from "../models/song.js"

async function index(req, res) {
  const users = await User.find({})
  res.render('users/index', {
    users
  })
}

async function show(req, res) {
  console.log(req.session.user._id);
  
  const songs = await Song.find({})
  .populate('owner')
  const selectedUser = await User.findById(req.params.userId)
  if (selectedUser.equals(req.session.user._id)) {
  res.render('songs/profile', {
    selectedUser,
    songs
  })
} else {
  res.render('songs/difprofile', {
    songs
  })
}
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