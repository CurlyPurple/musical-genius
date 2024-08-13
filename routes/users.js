import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as usersCtrl from '../controllers/users.js'
import * as songsCtrl from '../controllers/songs.js'

const router = Router()

// public routes
router.get('/:userId', usersCtrl.show)

// protected routes
router.get('/:userId/entourage', usersCtrl.indexE)
router.get('/', isSignedIn, usersCtrl.index)

export { router }
