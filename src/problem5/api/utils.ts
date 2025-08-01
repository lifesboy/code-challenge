import {log} from '../lib/logger'
import {ErrorResponse} from './entities/errorResponse'
import * as MESSAGES from '../domain/messages'
import * as CODES from '../domain/codes'
import * as STATUSES from '../domain/statuses'
import {Response} from 'express'
import {ApiResponse} from "./entities/apiResponse";


export async function handleRouteResult<T>(res: Response, result: ApiResponse<T>): Promise<Response> {
  return res.status(result.status ?? STATUSES.SUCCESS.SUCCESS).send(result)
}

export async function handleRouteError(res: Response, err: Error | any): Promise<Response> {
  log.error('handleRouteError', err)

  if (err?.name === 'ValidationError') {
    return res.status(STATUSES.ERROR.BAD_REQUEST).send({
      code: CODES.ERROR.BAD_REQUEST,
      message: err?.errors[0] ?? MESSAGES.ERROR.INVALID_PARAMS
    } as ErrorResponse<null>)
  }

  return res.status(STATUSES.ERROR.UNKNOWN).send({
    code: CODES.ERROR.UNKNOWN,
    message: MESSAGES.ERROR.UNKNOWN
  } as ErrorResponse<null>)
}
