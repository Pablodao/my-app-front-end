import light from "./light";

const untypedThemes = {
  light,
};

export type Theme = typeof light;
export type ThemeKey = keyof typeof untypedThemes;

const themes: { [k in ThemeKey]: Theme } = untypedThemes;

export default themes;
