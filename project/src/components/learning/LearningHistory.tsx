import React from 'react';
import { Calendar } from 'lucide-react';

interface HistoryEvent {
  id: string;
  date: Date;
  type: 'completed' | 'started' | 'bookmark';
  lessonId: string;
  lessonTitle: string;
}

interface LearningHistoryProps {
  events: HistoryEvent[];
}

export function LearningHistory({ events }: LearningHistoryProps) {
  const sortedEvents = [...events].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Learning History</h3>
      
      <div className="space-y-4">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-start space-x-4 text-white/80"
          >
            <div className="flex-shrink-0 w-12 text-center">
              <Calendar className="w-5 h-5 mx-auto mb-1" />
              <div className="text-xs">
                {new Date(event.date).toLocaleDateString()}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-white">
                {event.lessonTitle}
              </div>
              <div className="text-xs text-white/60">
                {event.type === 'completed' && 'Completed lesson'}
                {event.type === 'started' && 'Started learning'}
                {event.type === 'bookmark' && 'Bookmarked for later'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}