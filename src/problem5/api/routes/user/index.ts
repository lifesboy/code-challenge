import {Router} from 'express'
import {router as createRouter} from './create'
import {router as searchRouter} from './search'
import {router as detailRouter} from './detail'
import {router as updateRouter} from './update'
import {router as deleteRouter} from './delete'


export const router = Router()

router.use('/', createRouter)
router.use('/search', searchRouter)
router.use('/', detailRouter)
router.use('/', updateRouter)
router.use('/', deleteRouter)
