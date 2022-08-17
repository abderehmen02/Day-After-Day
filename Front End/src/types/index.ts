
export * from './actions'
export * from './state/userLogin'
export * from './state/userInfo'
export * from './state/productivity'

import { userLoginAction } from './state/userLogin'
import { userInfoAction } from './state/userInfo'
import { productivityAction } from './state/productivity'


export type Action = productivityAction  | userInfoAction 