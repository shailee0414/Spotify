import { light } from './light';
import { palette } from './palette';
const dark = {
  ...light,
  theme: 'dark',
  color: {
    primary: palette.c1B1A1C,
    onPrimary: palette.c1B1A1C,
    primaryContainer: palette.c777777,
    onPrimaryContainer: palette.c777777,
    primaryText: palette.cFFFFFF,
    secondaryText: palette.cc9c8c5,
    tertiary: palette.c1ED760,
    tertiaryText: palette.c1ED760,
    background: palette.c121212,
    surface: palette.c282828,
    onSurface: palette.cFFFFFF,
    error: palette.cf5f3f0,
    onError: palette.cf5f3f0,
    border: palette.c777777,
    notification: palette.c1ED760,
  },
};

export type Theme = typeof dark;
export { dark };
