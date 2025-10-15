// Navigation constants and utilities
export const NAVIGATION_ANIMATIONS = {
  SLIDE_FROM_RIGHT: 'slide_from_right',
  SLIDE_FROM_LEFT: 'slide_from_left',
  FADE: 'fade',
  NONE: 'none',
} as const;

export const NAVIGATION_OPTIONS = {
  HEADER_SHOWN: false,
  GESTURE_ENABLED: true,
  DEFAULT_ANIMATION: 'slide_from_right',
} as const;

// Navigation screen names
export const SCREEN_NAMES = {
  AUTH: 'Authentication',
  SIGNUP: 'SignUp',
  HOME: 'Home',
  PROFILE: 'Profile',
  FEED: 'Feed',
  ARTIST: 'Artist'
}

// Navigation timing constants
export const NAVIGATION_TIMING = {
  ANIMATION_DURATION: 300,
  TRANSITION_DURATION: 250,
} as const;
