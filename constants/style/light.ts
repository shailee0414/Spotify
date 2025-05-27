import { palette } from './palette';
import { spacing } from './spacing';
import { fontFamily } from './fontFamily';
import { fontSize } from './fontSize';
import { borderRadii } from './borderRadii';
import { fontWeight } from './fontWeight';

const GOLDEN_RATIO = 1.62;

const light = {
  theme: 'light',
  spacing,
  fontFamily,
  fontSize,
  fontWeight,
  borderRadii,
  textVariants: {
    fs28Bold: {
      fontWeight: fontWeight.bold,
      fontSize: fontSize.fs28,
      lineHeight: fontSize.fs34 * GOLDEN_RATIO,
      fontFamily: fontFamily.primary.regular,
    },
    fs20Bold: {
      fontSize: fontSize.fs20,
      lineHeight: fontSize.fs20 * GOLDEN_RATIO,
      fontFamily: fontFamily.primary.regular,
      fontWeight: fontWeight.bold,
    },
    fs16Bold: {
      fontSize: fontSize.fs16,
      lineHeight: fontSize.fs16 * GOLDEN_RATIO,
      fontFamily: fontFamily.primary.regular,
      fontWeight: fontWeight.bold,
    },
    fs8Semi: {
      fontSize: fontSize.fs8,
      lineHeight: fontSize.fs8 * GOLDEN_RATIO,
      fontFamily: fontFamily.primary.regular,
      fontWeight: fontWeight.semiBold,
    },

    // fs16PriReg: {
    //   fontSize: fontSize.fs16,
    //   lineHeight: fontSize.fs16 * GOLDEN_RATIO,
    //   fontFamily: fontFamily.primary.regular,
    //   fontWeight: fontWeight.regular,
    // },
    // fs14PriSemi: {
    //   fontSize: fontSize.fs14,
    //   lineHeight: fontSize.fs14 * GOLDEN_RATIO,
    //   fontFamily: fontFamily.primary.medium,
    //   fontWeight: fontWeight.semiBold,
    // },
    // fs14PriReg: {
    //   fontSize: fontSize.fs14,
    //   lineHeight: fontSize.fs14 * GOLDEN_RATIO,
    //   fontFamily: fontFamily.primary.regular,
    //   fontWeight: fontWeight.regular,
    // },

    // fs12PriSemi: {
    //   fontSize: fontSize.fs12,
    //   lineHeight: fontSize.fs12 * GOLDEN_RATIO,
    //   fontFamily: fontFamily.primary.regular,
    //   fontWeight: fontWeight.semiBold,
    // },
    // fs12PriReg: {
    //   fontSize: fontSize.fs12,
    //   lineHeight: fontSize.fs12 * GOLDEN_RATIO,
    //   fontFamily: fontFamily.primary.regular,
    //   fontWeight: fontWeight.regular,
    // },
    defaults: {
      // We can define a default text variant here.
    },
  },
};

export type Theme = typeof light;
export { light };
