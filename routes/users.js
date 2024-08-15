import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as usersCtrl from '../controllers/users.js'
import * as songsCtrl from '../controllers/songs.js'

const router = Router()

// public routes
router.get('/:userId', usersCtrl.show)

// protected routes
// router.post('/:userId/entourage', usersCtrl.showFriend)
router.get('/:userId/entourage', isSignedIn, usersCtrl.indexE)
router.get('/', isSignedIn, usersCtrl.index)
// router.post('/:userId/friend', isSignedIn, songsCtrl.addFriend)

export { router }
