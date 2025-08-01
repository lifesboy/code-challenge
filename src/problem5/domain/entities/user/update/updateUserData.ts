import User from '../../../../models/user.model'

export interface UpdateUserData extends Partial<User> {
}