import {ApiResponse} from './apiResponse'

export interface SuccessResponse<T> extends ApiResponse {
  status: number,
  code: string,
  data?: T,
}
