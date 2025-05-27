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
  },
};

export type Theme = typeof dark;
export { dark };
