import { useState, useEffect } from 'react';
import { LearningProgress, Lesson, Bookmark } from '../types/learning';

export function useLearningProgress(userId: string, hobbyId: string) {
  const [progress, setProgress] = useState<LearningProgress | null>(null);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [recentLessons, setRecentLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`progress-${userId}-${hobbyId}`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }

    // Load bookmarks
    const savedBookmarks = localStorage.getItem(`bookmarks-${userId}`);
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }

    // Load recent lessons
    const savedRecent = localStorage.getItem(`recent-${userId}`);
    if (savedRecent) {
      setRecentLessons(JSON.parse(savedRecent));
    }
  }, [userId, hobbyId]);

  const saveProgress = (newProgress: Partial<LearningProgress>) => {
    const updated = { ...progress, ...newProgress };
    localStorage.setItem(`progress-${userId}-${hobbyId}`, JSON.stringify(updated));
    setProgress(updated as LearningProgress);
  };

  const toggleBookmark = (lessonId: string) => {
    const existing = bookmarks.find(b => b.lessonId === lessonId);
    let updated: Bookmark[];

    if (existing) {
      updated = bookmarks.filter(b => b.lessonId !== lessonId);
    } else {
      const newBookmark: Bookmark = {
        id: Date.now().toString(),
        lessonId,
        userId,
        createdAt: new Date(),
      };
      updated = [...bookmarks, newBookmark];
    }

    localStorage.setItem(`bookmarks-${userId}`, JSON.stringify(updated));
    setBookmarks(updated);
  };

  const addRecentLesson = (lesson: Lesson) => {
    const updated = [lesson, ...recentLessons.filter(l => l.id !== lesson.id)].slice(0, 5);
    localStorage.setItem(`recent-${userId}`, JSON.stringify(updated));
    setRecentLessons(updated);
  };

  return {
    progress,
    bookmarks,
    recentLessons,
    saveProgress,
    toggleBookmark,
    addRecentLesson,
  };
}