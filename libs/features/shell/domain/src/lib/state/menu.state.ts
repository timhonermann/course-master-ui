import { MenuItem } from '@course-master/features/shell/model';
import { featureUrl } from '@course-master/shared/routing/model';

export type MenuState = {
  menuItems: MenuItem[];
};

export const initialMenuState: MenuState = {
  menuItems: [
    {
      label: 'Courses',
      icon: 'course',
      link: featureUrl.COURSE,
    },
    {
      label: 'Settings',
      icon: 'settings',
      link: featureUrl.SETTINGS,
    },
  ],
};
