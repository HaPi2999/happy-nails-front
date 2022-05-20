import {atom} from 'recoil'
import {PAGE_TYPE} from 'atoms/constants'
import {PAGES} from 'atoms/App/constants'

export const pageType = atom({
    key: PAGE_TYPE,
    default: PAGES.HOME
})