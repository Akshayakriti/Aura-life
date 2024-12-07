import React from 'react';
import { ChatInterface } from '../components/ChatInterface';
import { Heart, Shield, Sun } from 'lucide-react';

export function MentalHealth() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Mental Health Support</h1>
        <p className="text-xl text-white/80">A safe space for support and guidance</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Resources</h2>
            
            <div className="space-y-4">
              <ResourceCard
                icon={Heart}
                title="Self-Care Tips"
                description="Daily practices for mental wellness"
              />
              <ResourceCard
                icon={Shield}
                title="Crisis Support"
                description="24/7 helpline and emergency contacts"
              />
              <ResourceCard
                icon={Sun}
                title="Meditation"
                description="Guided sessions for peace of mind"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ChatInterface
            initialMessage="Hello! I'm here to listen and support you. How are you feeling today?"
            placeholder="Share your thoughts..."
          />
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start space-x-4 text-white/90 hover:text-white transition-colors cursor-pointer">
      <Icon className="w-6 h-6 mt-1" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}