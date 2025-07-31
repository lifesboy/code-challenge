import {ApiResponse} from './apiResponse'

export interface ErrorResponse extends ApiResponse {
  status: number,
  code: string,
  message: string,
}
