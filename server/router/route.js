
import express from 'express'
import { datacontroller } from '../controller/datacontroller.js'
const router = express.Router();

router.get('/:city', datacontroller)




export default router;