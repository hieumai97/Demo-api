/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from './config/environment'

const START_SERVER = ()=>{
  const app = express()

  app.get('/', async(req, res) => {

    // console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World! Tôi điên mất</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello ${env.AUTHOR}, I am running at ${ env.APP_HOST }:${ env.APP_PORT }/`)

  })

  // exitHook(() =>{
  //   console.log('Exit app')
  // })
  exitHook(() => {
    console.log('Server is shutting down')
    CLOSE_DB()
    console.log('Disconnected from MongoDB Cloud Atlas')
  })
}

CONNECT_DB()
  .then(() => {
    console.log('Connected to MongoDB Cloud Atlas!')
  })
  .then(() => START_SERVER())
  . catch(err => {
    console.error(err)
    process.exit(0)
  })
