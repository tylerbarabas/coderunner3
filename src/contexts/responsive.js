import React {
  createContext,
} from 'react'

import responsiveReducer from '../reducers/responsive'

const DEFAULT = {
  isMobile: false,
  isTouch: false,
  isDesktop: false,
  isWideScreen: false,
  isFullHD: false,
}
