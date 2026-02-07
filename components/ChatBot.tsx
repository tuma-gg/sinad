'use client';

import { useState } from 'react';
import { Language } from '@/Lib/translations';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

interface ChatBotProps {
  lang: Language;
}

export default function ChatBot({ lang }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    {
      text: lang === 'ar' 
        ? 'مرحباً! أنا سناد 👋 كيف يمكنني مساعدتك؟'
        : 'Hello! I\'m Sanad 👋 How can I help you?',
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages([...messages, { text: inputValue, sender: 'user' }]);

    // Simple bot response (you can integrate AI later)
    setTimeout(() => {
      const botResponse = lang === 'ar'
        ? 'شكراً لسؤالك! سأساعدك قريباً. يمكنك التواصل معنا عبر البريد الإلكتروني: sinadco.om@gmail.com'
        : 'Thank you for your question! I\'ll help you soon. You can contact us at: sinadco.om@gmail.com';
      
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);

    setInputValue('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${lang === 'ar' ? 'left-6' : 'right-6'} bottom-6 z-50 w-16 h-16 bg-gold rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center`}
      >
        {isOpen ? <FiX size={28} className="text-brown-dark" /> : <FiMessageCircle size={28} className="text-brown-dark" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed ${lang === 'ar' ? 'left-6' : 'right-6'} bottom-24 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden`}>
          {/* Header */}
          <div className="bg-brown-primary text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="text-brown-dark font-bold">سِ</span>
            </div>
            <div>
              <h3 className="font-bold">{lang === 'ar' ? 'سناد' : 'Sanad'}</h3>
              <p className="text-xs text-gold">{lang === 'ar' ? 'مساعد افتراضي' : 'Virtual Assistant'}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-brown-primary text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-brown-primary text-white rounded-lg hover:bg-gold hover:text-brown-dark transition-all"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}