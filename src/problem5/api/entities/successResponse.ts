import {ApiResponse} from './apiResponse'

export interface SuccessResponse<T> extends ApiResponse<T> {
  status: number,
  code: string,
  data?: T,
}
