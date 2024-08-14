import { User } from "../models/user.js"
import { Song } from "../models/song.js"

async function index(req, res) {
  const users = await User.find({})
  res.render('users/index', {
    users,
  })
}

async function show(req, res) {
  const songs = await Song.find({})
  .populate('owner')
  console.log(req.session.user);
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

async function indexE(req,res) {
  const selectedUser = await User.findById(req.params.userId)
  res.render('songs/entourage', {
    selectedUser
  })
}

// async function addFriend(req,res) {
//   const selectedUser = await User.findById(req.params.userId)
//   req.body.friend = req.session.user._id
//   selectedUser.friends.push(req.body.friend)
//     await selectedUser.save()
// }

export {
  index,
  show,
  indexE,
  // addFriend
}