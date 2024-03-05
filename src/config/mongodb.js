/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

// eslint-disable-next-line no-unused-vars
import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'
let demoDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
// state api options
  serverApi:{
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})
// ket noi database
export const CONNECT_DB = async () => {
  //goi ket noi vs mongodb atlas voi uri
  await mongoClientInstance.connect()
  // ket noi thanh cong thi lay db theo ten va  gan nguoc lai mongoClientInstance
  demoDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = ()=>{
  if (!demoDatabaseInstance) throw new Error('Must connect to Database first!')
  return demoDatabaseInstance
}

export const CLOSE_DB = async () => {
  console.log('Exit app')
  await mongoClientInstance.close()
}