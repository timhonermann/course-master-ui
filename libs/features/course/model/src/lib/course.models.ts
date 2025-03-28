import { Client } from '@course-master/shared/client/model';
import { CourseType } from '@course-master/shared/course-type/model';
import { Partner } from '@course-master/shared/partner/model';

export type Course = {
  id: string;
  startsAt: string;
  endsAt: string;
  client: Client;
  partner: Partner;
  courseType: CourseType;
};
