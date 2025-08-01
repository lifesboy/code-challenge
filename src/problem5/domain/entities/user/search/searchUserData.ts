import User from '../../../../models/user.model'
import {PageData} from '../../pageData'


export interface SearchUserDataItem extends Partial<User> {

}

export interface SearchUserData extends PageData<SearchUserDataItem> {
}