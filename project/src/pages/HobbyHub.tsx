import { useState } from 'react';
import { Palette, Music, Utensils, Camera, Code, Dumbbell } from 'lucide-react';
import { ChatInterface } from '../components/ChatInterface';

const hobbies = [
  {
    id: 'art',
    name: 'Art & Painting',
    icon: Palette,
    description: 'Express yourself through colors and creativity',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800',
    initialMessage: "Welcome to the Art & Painting section! I can help you get started with various art forms, techniques, and materials. What would you like to learn about?",
  },
  {
    id: 'music',
    name: 'Music',
    icon: Music,
    description: 'Learn to play instruments or create music',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800',
    initialMessage: "Welcome to the Music section! Whether you're interested in learning an instrument, music theory, or production, I'm here to guide you. What aspect of music would you like to explore?",
  },
  {
    id: 'cooking',
    name: 'Cooking',
    icon: Utensils,
    description: 'Master the art of culinary creation',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    initialMessage: "Welcome to the Cooking section! From basic techniques to advanced recipes, I'm here to help you on your culinary journey. What would you like to cook today?",
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: Camera,
    description: 'Capture moments and tell stories through images',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800',
    initialMessage: "Welcome to the Photography section! Whether you're interested in camera basics, composition, or post-processing, I can help guide you. What would you like to learn about?",
  },
  {
    id: 'coding',
    name: 'Programming',
    icon: Code,
    description: 'Build amazing things with code',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
    initialMessage: "Welcome to the Programming section! From web development to software engineering, I can help you get started. What programming topic interests you?",
  },
  {
    id: 'fitness',
    name: 'Fitness',
    icon: Dumbbell,
    description: 'Stay healthy and achieve your fitness goals',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    initialMessage: "Welcome to the Fitness section! Whether you're looking to start working out, improve your technique, or create a routine, I'm here to help. What are your fitness goals?",
  },
];

export function HobbyHub() {
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);
  const hobby = hobbies.find(h => h.id === selectedHobby);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">HobbyHub</h1>
      <p className="text-xl text-white/80 text-center mb-12">
        Discover new passions and learn from expert guidance
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbies.map((hobby) => (
          <button
            key={hobby.id}
            onClick={() => setSelectedHobby(hobby.id)}
            className="group relative h-64 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
              <hobby.icon className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{hobby.name}</h3>
              <p className="text-white/80 text-center">{hobby.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedHobby && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              {hobby && (
                <h2 className="text-2xl font-bold flex items-center space-x-2">
                  <hobby.icon className="w-6 h-6" />
                  <span>{hobby.name}</span>
                </h2>
              )}
              <button
                onClick={() => setSelectedHobby(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 min-h-0">
              {hobby && (
                <ChatInterface
                  initialMessage={hobby.initialMessage}
                  placeholder={`Ask anything about ${hobby.name.toLowerCase()}...`}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
