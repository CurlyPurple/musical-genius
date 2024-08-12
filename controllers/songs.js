import { Song } from "../models/song.js"

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
    res.render('tacos/show', {
      song
    })
  } catch (error) {
    console.log(error)
    res.redirect('/songs')
  }
}

export {
  index,
  create,
  show
}