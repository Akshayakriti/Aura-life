import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
        <Sparkles className="inline-block w-12 h-12 mr-4" />
        AURA LIFE
      </h1>
      <p className="text-2xl text-white/80 mb-12 animate-slide-up">
        Empower Your Day
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <FeatureCard
          title="Hobby Learning Hub"
          description="Discover and learn new hobbies with AI-powered guidance"
          to="/hobby-hub"
        />
        <FeatureCard
          title="Mental Health Support"
          description="Get support and guidance for your mental well-being"
          to="/mental-health"
        />
        <FeatureCard
          title="My Journal"
          description="Document your thoughts and track your progress"
          to="/journal"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <Link
      to={to}
      className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </Link>
  );
}