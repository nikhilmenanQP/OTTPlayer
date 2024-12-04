type FontSize = {
  [key: string]: number;
};

interface Spacing {
  [key: string]: number;
}

export const SPACING: Spacing = {
  null: 0,
  // small
  sm_xxxx: 2,
  sm_xxx: 4,
  sm_xx: 6,
  sm_x: 8,
  sm: 10,
  sm_ll: 12,
  sm_lll: 18,
  sm_llll: 24,
  // medium
  md_xxxx: 28,
  md_xxx: 32,
  md_xx: 36,
  md: 40,
  md_ll: 42,
  md_lll: 46,
  md_llll: 50,
  // large
  lg_xxxx: 52,
  lg_xxx: 56,
  lg_xx: 60,
  lg: 64,
  lg_ll: 70,
  lg_lll: 80,
  lg_llll: 100,
};

// The font size may change in the future.
export const FONT_SIZE: FontSize = {
  // small
  sm_xxxx: 2,
  sm_xxx: 4,
  sm_xx: 6,
  sm_x: 8,
  sm: 10,
  sm_ll: 12,
  sm_lll: 18,
  sm_llll: 24,
  // medium
  md_xxxx: 28,
  md_xxx: 32,
  md_xx: 36,
  md: 40,
  md_ll: 42,
  md_lll: 46,
  md_llll: 50,
  // large
  lg_xxxx: 52,
  lg_xxx: 56,
  lg_xx: 60,
  lg: 64,
  lg_ll: 70,
  lg_lll: 80,
  lg_llll: 100,
};
