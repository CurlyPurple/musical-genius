import { User } from "../models/user.js"
import { Song } from "../models/song.js"

async function index(req, res) {
  const users = await User.find({})
  const song = await Song.findById(req.params.songId)
  res.render('users/index', {
    users,
    song
  })
}

async function show(req, res) {
  const songs = await Song.find({})
  const selectedUser = await User.findById(req.params.userId)
  const selectedId = req.params.userId
  console.log(selectedId);
  
  if (selectedUser.equals(req.session.user._id)) {
    res.render('songs/profile', {
      selectedUser,
      songs
    })
  } else {
    res.render('songs/difprofile', {
      songs,
      selectedUser,
      selectedId
    })
  }
}

export {
  index,
  show,
}