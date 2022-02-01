
import express from 'express'
import { first } from '../controller/datacontroller.js'
const router = express.Router();

router.get('/:city', first)




export default router;