export type ContentLessons = {
  title: string;
  description: string;
  enrollButton: string;
  elements: string[];
}

export type ContentLessonsResponse = {
  data: {
    lessons: ContentLessons[]
  }
}