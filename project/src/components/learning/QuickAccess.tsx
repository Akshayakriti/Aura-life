import React from 'react';
import { Bookmark, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Lesson } from '../../types/learning';

interface QuickAccessProps {
  recentLessons: Lesson[];
  bookmarkedLessons: Lesson[];
  suggestedLessons: Lesson[];
}

export function QuickAccess({ recentLessons, bookmarkedLessons, suggestedLessons }: QuickAccessProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
      
      <div className="space-y-6">
        <Section
          icon={Clock}
          title="Recent Lessons"
          lessons={recentLessons}
        />
        <Section
          icon={Bookmark}
          title="Bookmarked"
          lessons={bookmarkedLessons}
        />
        <Section
          icon={Star}
          title="Suggested"
          lessons={suggestedLessons}
        />
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, lessons }: {
  icon: React.ElementType;
  title: string;
  lessons: Lesson[];
}) {
  return (
    <div>
      <div className="flex items-center space-x-2 text-white/80 mb-2">
        <Icon className="w-4 h-4" />
        <h4 className="font-medium">{title}</h4>
      </div>
      <div className="space-y-2">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/hobby-hub/${lesson.hobbyId}/lessons/${lesson.id}`}
            className="block p-2 rounded-lg hover:bg-white/5 transition-colors text-white/70 hover:text-white"
          >
            {lesson.title}
          </Link>
        ))}
      </div>
    </div>
  );
}