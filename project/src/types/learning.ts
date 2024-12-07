export interface LearningProgress {
  userId: string;
  hobbyId: string;
  completedLessons: string[];
  bookmarks: string[];
  lastCheckpoint: string;
  lastVisited: Date;
}

export interface Lesson {
  id: string;
  hobbyId: string;
  title: string;
  description: string;
  content: string;
  duration: number;
  prerequisites: string[];
  nextLessons: string[];
}

export interface Bookmark {
  id: string;
  lessonId: string;
  userId: string;
  createdAt: Date;
  note?: string;
}