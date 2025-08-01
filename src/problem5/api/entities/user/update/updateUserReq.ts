import {UpdateUserData} from '../../../../domain/entities/user'

export interface UpdateUserReq {
  id: number
  data: Partial<UpdateUserData>
}