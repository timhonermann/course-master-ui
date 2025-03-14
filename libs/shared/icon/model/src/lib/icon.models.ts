export const icons = ['course', 'settings', 'add', 'delete'] as const;

export type IconType = (typeof icons)[number];
