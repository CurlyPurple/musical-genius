import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as songsCtrl from '../controllers/songs.js'

const router = Router()

// protected routes

router.get('/', isSignedIn, songsCtrl.index)
router.get('/:songId', isSignedIn, songsCtrl.show)
router.get('/:songId/edit', isSignedIn, songsCtrl.edit)
router.get('/:songId/:commentId/edit', isSignedIn, songsCtrl.editComment)
router.post('/', isSignedIn, songsCtrl.create)
router.post('/:songId/comments', isSignedIn, songsCtrl.addComment)
router.put('/:songId', isSignedIn, songsCtrl.update)
router.put('/:songId/:commentId', isSignedIn, songsCtrl.updateComment)
router.delete('/:songId', isSignedIn, songsCtrl.delete)
router.delete('/:songId/:commentId',isSignedIn, songsCtrl.deleteComment)


export { router }