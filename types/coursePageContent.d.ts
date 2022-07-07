export type CoursePageContent = {
  plan: string[],
  description: string,
  enrollButton: string;
  title: string;
}

export type CoursePageContentResponse = {
  data: {
    coursePages: CoursePageContent[]
  }
}