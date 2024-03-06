/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required ',
      'string.empty': 'Title is is not allowed to be empty',
      'string.max': 'Title max 50 char',
      'string.min': 'Title min 3 char',
      'string.trim': 'Title must not have leading or trailing whitespace'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict().messages({
      'any.required': 'Description is required ',
      'string.empty': 'Title is is not allowed to be empty',
      'string.max': 'Description max 256 char',
      'string.min': 'Description min 3 char',
      'string.trim': 'Description must not have leading or trailing whitespace'
    }),
  })

  try {
    console.log('req.body', req.body)
    // xác thực thực tể có trong body có gắn đúng với đk
    // abortEarly cách validate có dừng sớm không (default:true)
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
    res
      .status(StatusCodes.CREATED)
      .json({ message: 'Note: Api create new board' })
  } catch (err) {
    console.log(err)
    //MÃ 422 THƯỜNG DÙNG CHO THỰC THỂ DỮ LIỆU KHÔNG THỰC THI ĐƯỢC
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      error: new Error(err).message
    })
  }
}

export const boardValidation = {
  createNew
}
