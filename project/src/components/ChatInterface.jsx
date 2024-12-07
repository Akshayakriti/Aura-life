import React, { useState } from 'react';
import './ChatInterface.css'; // Import the CSS file

export const ChatInterface = ({ initialMessage, placeholder }) => {
  const [messages, setMessages] = useState([`AI: ${initialMessage}`]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.trim();
      setMessages([...messages, `User: ${userMessage}`]);

      // Simulate AI response based on user message
      let aiResponse = '';
      const hobby = placeholder.split(' ')[2].toLowerCase();

      switch (hobby) {
        case 'art':
          if (userMessage.toLowerCase().includes('watercolor')) {
            aiResponse = 'Begin with good quality watercolor paper, brushes, and paints. Start with simple washes and gradually move to more complex techniques like layering and blending. Would you like some beginner tutorials to follow?';
          } else if (userMessage.toLowerCase().includes('oil and acrylic')) {
            aiResponse = 'Oil paints take longer to dry and allow for more blending time, while acrylics dry quickly and are easier to clean up with water. Both have unique qualities; it depends on your preference. Need a recommendation on which to start with?';
          } else if (userMessage.toLowerCase().includes('techniques')) {
            aiResponse = 'Certainly! You can try techniques like dry brushing, sponging, splattering, or even using unconventional tools like credit cards or fingers. Want to explore more about any specific technique?';
          } else {
            aiResponse = 'I can help with various art forms, techniques, and materials. What would you like to learn about?';
          }
          break;

        case 'music':
          if (userMessage.toLowerCase().includes('instrument')) {
            aiResponse = 'Many find the ukulele or keyboard to be beginner-friendly due to their simple chords and scales. Would you like tips on getting started with either?';
          } else if (userMessage.toLowerCase().includes('music theory')) {
            aiResponse = 'Absolutely! Music theory covers scales, chords, rhythm, and harmony. Starting with understanding the major scale and basic chords can be very helpful. Want a brief lesson on major scales?';
          } else if (userMessage.toLowerCase().includes('strumming patterns')) {
            aiResponse = 'Practice regularly with a metronome to keep time, and experiment with different rhythms and dynamics. Focusing on up and down strumming consistency is key. Need specific exercises for practice?';
          } else {
            aiResponse = 'I can help with learning instruments, music theory, and production. What aspect of music would you like to explore?';
          }
          break;

        case 'cooking':
          if (userMessage.toLowerCase().includes('recipe')) {
            aiResponse = 'You can start with a simple pasta dish like spaghetti aglio e olio. It\'s easy and delicious. Would you like the recipe?';
          } else if (userMessage.toLowerCase().includes('knife skills')) {
            aiResponse = 'Practice is key! Start with the basics: the chef’s knife grip and different cuts like slicing, dicing, and chopping. Remember to keep your fingers safe. Want a detailed guide on these techniques?';
          } else if (userMessage.toLowerCase().includes('healthy breakfast')) {
            aiResponse = 'Sure! A smoothie with fruits, yogurt, and some spinach is quick, nutritious, and delicious. Need a recipe to try out?';
          } else {
            aiResponse = 'I can help with basic techniques to advanced recipes. What would you like to cook today?';
          }
          break;

        case 'photography':
          if (userMessage.toLowerCase().includes('basics')) {
            aiResponse = 'Start by understanding your camera settings like aperture, shutter speed, and ISO. Practice composition techniques like the rule of thirds. Interested in a detailed guide on camera settings?';
          } else if (userMessage.toLowerCase().includes('phone photos')) {
            aiResponse = 'Focus on good lighting and clean your lens regularly. Use the gridlines for composition and experiment with different angles. Want tips on editing photos using mobile apps?';
          } else if (userMessage.toLowerCase().includes('golden hour')) {
            aiResponse = 'The golden hour is the period shortly after sunrise or before sunset, offering soft, warm light ideal for photography. Would you like tips on how to make the most of golden hour lighting?';
          } else {
            aiResponse = 'I can help with camera basics, composition, or post-processing. What would you like to learn about?';
          }
          break;

        case 'programming':
          if (userMessage.toLowerCase().includes('learning programming')) {
            aiResponse = 'Choose a beginner-friendly language like Python. Start with basic concepts like variables, loops, and functions. Would you like a beginner’s tutorial for Python?';
          } else if (userMessage.toLowerCase().includes('debug my code')) {
            aiResponse = 'Use print statements to understand the flow of your program, and learn to read error messages carefully. Many IDEs also have built-in debugging tools. Need a guide on debugging techniques?';
          } else if (userMessage.toLowerCase().includes('front-end and back-end')) {
            aiResponse = 'Front-end development involves creating the visual and interactive aspects of a website, while back-end development focuses on server-side logic, databases, and APIs. Interested in learning more about either?';
          } else {
            aiResponse = 'I can help with web development to software engineering. What programming topic interests you?';
          }
          break;

        case 'fitness':
          if (userMessage.toLowerCase().includes('workout routine')) {
            aiResponse = 'Begin with a mix of cardio, strength training, and flexibility exercises. Start slow and gradually increase intensity. Would you like a sample beginner workout plan?';
          } else if (userMessage.toLowerCase().includes('motivated to exercise')) {
            aiResponse = 'Set clear, achievable goals and track your progress. Find a workout buddy or try different activities to keep things interesting. Need tips on setting fitness goals?';
          } else if (userMessage.toLowerCase().includes('flexibility')) {
            aiResponse = 'Regular stretching and yoga can greatly improve flexibility. Focus on major muscle groups and stretch gently and consistently. Want a stretching routine to follow?';
          } else {
            aiResponse = 'I can help with starting to work out, improving your technique, or creating a routine. What are your fitness goals?';
          }
          break;

        default:
          aiResponse = 'How can I help you with your hobby?';
      }

      setMessages((prevMessages) => [...prevMessages, `AI: ${aiResponse}`]);
      setInput('');
    }
  };

  return (
    <div className="chat-interface">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.startsWith('AI:') ? 'ai' : 'user'}`}>
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="chat-input"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};
