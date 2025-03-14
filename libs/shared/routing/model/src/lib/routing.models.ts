export const featureUrl = {
  COURSE: 'course',
  SETTINGS: 'settings',
} as const;

export type FeatureUrl = (typeof featureUrl)[keyof typeof featureUrl];
