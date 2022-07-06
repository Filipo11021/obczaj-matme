export type ContentCourse = {
  title: string;
  description: string;
  seeMoreButton: string;
  elements: string[];
  enrollButton: string;
};

export type ContentCourseResponse = {
  data: {
    courses: ContentCourse[];
  };
};
