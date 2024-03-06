/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRouter } from '~/routes/v1/boardRoute'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({message: 'APIs V1 are ready to use.'})
})

Router.use('/boards', boardRouter)

//cach 1
export const APIs_V1 = Router
//cach 2
// export default router