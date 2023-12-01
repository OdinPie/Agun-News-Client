import React from 'react';
import ChatBot from 'react-simple-chatbot';
const ChatBotSegment = () => {
    return (
      <ChatBot className='text-black'
      steps={[
        {
          id: '1',
          message: 'What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          trigger: '4'
          // end: true,
        },
        {
          id: '4',
          message: 'If the articles do not load, then please click on another route and then click on all articles again',
          end: true,
        },
      ]}
    />
    );
};

export default ChatBotSegment;