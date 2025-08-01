import {PageFilter} from '../../pageFilter'

export interface SearchUserFilter extends PageFilter {
  keyword?: string | null,
}