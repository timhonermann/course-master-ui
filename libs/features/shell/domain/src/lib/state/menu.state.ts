import { MenuItem } from '@course-master/features/shell/model';

export type MenuState = {
  menuItems: MenuItem[];
};

export const initialMenuState: MenuState = {
  menuItems: [
    {
      label: 'test',
      link: 'test',
    },
  ],
};
