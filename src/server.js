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
import {APIs_V1} from '~/routes/v1'


const START_SERVER = ()=>{
  const app = express()
  //middleware kích hoạt json cho data
  app.use(express.json())

  app.use('/v1', APIs_V1 )

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
