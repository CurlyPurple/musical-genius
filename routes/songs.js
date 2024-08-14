import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as songsCtrl from '../controllers/songs.js'

const router = Router()

// protected routes

router.get('/', isSignedIn, songsCtrl.index)
router.get('/:songId', isSignedIn, songsCtrl.show)
router.get('/:songId/edit', isSignedIn, songsCtrl.edit)
router.post('/', isSignedIn, songsCtrl.create)
router.post('/:songId/comments', isSignedIn, songsCtrl.addComment)
router.put('/:songId', isSignedIn, songsCtrl.update)
router.delete('/:songId', isSignedIn, songsCtrl.delete)


export { router }