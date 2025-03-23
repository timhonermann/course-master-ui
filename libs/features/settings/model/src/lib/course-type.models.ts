export type CourseType = {
  id: string;
  name: string;
};

export type CourseTypeCreation = Omit<CourseType, 'id'>;
