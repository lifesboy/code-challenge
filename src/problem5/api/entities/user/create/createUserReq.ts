import {CreateUserData} from '../../../../domain/entities/user'

export interface CreateUserReq {
  data: Partial<CreateUserData>
}