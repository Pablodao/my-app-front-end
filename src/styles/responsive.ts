import { keysOf } from "../utils/keysOf";

export const sizes: Record<string, number> = {
  mobile: 240,
  tablet: 480,
  laptop: 768,
  desktop: 992,
};

const minWidthQuery = (width: number): string =>
  `@media (min-width: ${width}px)`;

export const from = keysOf(sizes).reduce(
  (
    acc: Record<string, string>,
    key: keyof typeof sizes
  ): Record<string, string> => ({
    ...acc,
    [key]: minWidthQuery(sizes[key]),
  }),
  {}
);
