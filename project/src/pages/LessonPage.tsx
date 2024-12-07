import { useParams, Link } from 'react-router-dom';

import { Lesson } from '../types/learning';
import { ArrowLeft, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '../components/learning/Breadcrumbs';
import { ProgressBar } from '../components/learning/ProgressBar';
import { QuickAccess } from '../components/learning/QuickAccess';
import { useLearningProgress } from '../hooks/useLearningProgress';

export function LessonPage() {
  const { hobbyId, lessonId } = useParams();
  const {
    bookmarks,
    recentLessons,
    toggleBookmark,
  } = useLearningProgress('user123', hobbyId!);

  const isBookmarked = bookmarks.some(b => b.lessonId === lessonId);

  // Mock data - In a real app, this would come from an API
  const breadcrumbItems = [
    { label: 'Hobby Hub', path: '/hobby-hub' },
    { label: 'Art & Painting', path: '/hobby-hub/art' },
    { label: 'Basic Techniques', path: '/hobby-hub/art/basics' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/hobby-hub"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Hub</span>
              </Link>
              <button
                onClick={() => toggleBookmark(lessonId!)}
                className={`p-2 rounded-lg ${
                  isBookmarked
                    ? 'bg-purple-100 text-purple-600'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            <div className="prose max-w-none">
              <h1>Introduction to Color Theory</h1>
              <p>Lesson content goes here...</p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <ChevronLeft className="w-5 h-5" />
                <span>Previous Lesson</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
                <span>Next Lesson</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <ProgressBar progress={3} total={10} />
          <QuickAccess
            recentLessons={recentLessons}
            bookmarkedLessons={bookmarks.map(b => ({ id: b.lessonId } as Lesson))}
            suggestedLessons={[]}
          />
        </div>
      </div>
    </div>
  );
}