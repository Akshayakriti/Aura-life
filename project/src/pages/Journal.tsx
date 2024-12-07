import { useState, useEffect } from 'react';
import { Calendar, Search, Save, ChevronLeft, ChevronRight } from 'lucide-react';

interface JournalEntry {
  id: string;
  date: string;
  content: string;
  mood: 'happy' | 'neutral' | 'sad';
}

export function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    const saved = localStorage.getItem('journal-entries');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentEntry, setCurrentEntry] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [mood, setMood] = useState<JournalEntry['mood']>('neutral');

  useEffect(() => {
    localStorage.setItem('journal-entries', JSON.stringify(entries));
  }, [entries]);

  const handleSave = () => {
    if (!currentEntry.trim()) return;

    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      date: selectedDate,
      content: currentEntry,
      mood,
    };

    setEntries(prev => [...prev, newEntry]);
    setCurrentEntry('');
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + (direction === 'next' ? 1 : -1));
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">My Journal</h1>
        <p className="text-xl text-white/80">Document your thoughts and feelings</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigateDate('prev')}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border-none focus:ring-0"
                  />
                </div>
                <button
                  onClick={() => navigateDate('next')}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex space-x-2">
                {(['happy', 'neutral', 'sad'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMood(m)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      mood === m ? 'bg-purple-100 text-purple-500' : 'hover:bg-gray-100'
                    }`}
                  >
                    {m === 'happy' ? '😊' : m === 'neutral' ? '😐' : '😔'}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={currentEntry}
              onChange={(e) => setCurrentEntry(e.target.value)}
              placeholder="Write your thoughts..."
              className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Entry</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search entries..."
              className="w-full border-none focus:ring-0"
            />
          </div>
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{entry.date}</span>
                  <span>
                    {entry.mood === 'happy' ? '😊' : entry.mood === 'neutral' ? '😐' : '😔'}
                  </span>
                </div>
                <p className="text-gray-700 line-clamp-2">{entry.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}