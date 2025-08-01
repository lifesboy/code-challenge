import {CreateUserData} from '../../../../domain/entities/user/create/createUserData'

export interface CreateUserReq {
  data: Partial<CreateUserData>
}