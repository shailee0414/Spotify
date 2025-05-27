// Define an enum for fontWeight
enum fontWeight {
  normal = 'normal',
  bold = 'bold',
  light = '100',
  regular = '400',
  semiBold = '600',
  extraBold = '800',
}

export type FontWeight = typeof fontWeight;
export { fontWeight };
