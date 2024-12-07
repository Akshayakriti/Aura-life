import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, Heart, BookOpen } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-white" />
            <span className="text-2xl font-bold text-white">AURA LIFE</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink icon={<Book />} to="/hobby-hub">Hobby Hub</NavLink>
            <NavLink icon={<Heart />} to="/mental-health">Mental Health</NavLink>
            <NavLink icon={<BookOpen />} to="/journal">Journal</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ children, icon, to }: { children: React.ReactNode; icon: React.ReactNode; to: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}