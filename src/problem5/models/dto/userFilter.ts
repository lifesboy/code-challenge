import {PageFilter} from './pageFilter'

export interface UserFilter extends PageFilter {
  keyword?: string | null,
}