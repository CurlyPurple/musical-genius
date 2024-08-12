import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as songsCtrl from '../controllers/songs.js'

const router = Router()

// protected routes

router.get('/', isSignedIn, songsCtrl.index)
router.get('/:songId', songsCtrl.show)
router.post('/', isSignedIn, songsCtrl.create)


export { router }