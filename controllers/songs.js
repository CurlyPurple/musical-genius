import { Song } from "../models/song.js"
import { User } from "../models/user.js"

async function index(req,res) {
  try {
    const songs = await Song.find({})
    res.render('songs/index', {
      songs
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
    
  }
}

async function create(req,res) {
  try {
    req.body.owner = req.session.user._id
    await Song.create(req.body)
    res.redirect('/songs')
  } catch (error) {
    console.log(error)
    res.redirect('/songs')
  }
}

async function show(req,res) {
  try {
    const song = await Song.findById(req.params.songId)
    .populate('owner')
    res.render('songs/show', {
      song
    })
  } catch (error) {
    console.log(error)
    res.redirect('/songs')
  }
}

async function edit(req,res) {
  try {
    const song = await Song.findById(req.params.songId)
    res.render('songs/edit', {
      song
    })
  } catch (error) {
    console.log(error)
    res.redirect('/songs')
  }
}

async function update(req,res) {
  try {
    const song = await Song.findById(req.params.songId)
    if (song.owner.equals(req.session.user._id)) {
      await song.updateOne(req.body)
      res.redirect(`/songs/${song._id}`)
    } else {
      throw new Error('Not Authorized')
    }
  } catch (error) {
    console.log(error)
    res.redirect('/songs')
  }
}

async function deleteSong(req,res) {
  try {
    const song = await Song.findById(req.params.songId)
    if (song.owner.equals(req.session.user._id)) {
      await song.deleteOne()
      res.redirect('/songs')
    } else {
      throw new Error('Not Authorized')
    }
  } catch (error) {
    console.log(error)
    res.redirect('/songs')
  }
}

export {
  index,
  create,
  show,
  edit,
  update,
  deleteSong as delete,
}