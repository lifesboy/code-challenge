import {ApiResponse} from './apiResponse'

export interface ErrorResponse<T> extends ApiResponse<T> {
  status: number,
  code: string,
  message: string,
}
