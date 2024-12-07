import React from 'react';

interface ProgressBarProps {
  progress: number;
  total: number;
}

export function ProgressBar({ progress, total }: ProgressBarProps) {
  const percentage = Math.round((progress / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-white/80 mb-1">
        <span>{percentage}% Complete</span>
        <span>{progress}/{total} Lessons</span>
      </div>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}