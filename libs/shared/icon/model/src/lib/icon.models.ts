export const icons = ['course', 'settings'] as const;

export type IconType = (typeof icons)[number];
