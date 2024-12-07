import React from 'react';

const ChatBox = ({ value, onChange, onSend }) => {
  return (
    <div className="chat-box">
      <div className="messages">
        {/* Render your chat messages here */}
      </div>
      <textarea
        className="chat-input"
        value={value}
        onChange={onChange}
        rows={5} // Adjust rows to make the input area larger
        placeholder="Type your message here..."
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
};

export default ChatBox;

