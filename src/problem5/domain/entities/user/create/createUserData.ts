import User from '../../../../models/user.model'

export interface CreateUserData extends Partial<User> {
}