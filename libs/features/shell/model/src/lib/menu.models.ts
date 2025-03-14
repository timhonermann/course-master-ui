import { IconType } from '@course-master/shared/icon/model';
import { FeatureUrl } from '@course-master/shared/routing/model';

export type MenuItem = {
  label: string;
  icon: IconType;
  link: FeatureUrl;
};
