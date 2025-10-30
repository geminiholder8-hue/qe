import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  text: string;
  showQR?: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: 'Hello! I\'m ECA Bot. How can I help you today? You can ask me anything about The ECA Heaven!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    'What programs do you offer?',
    'What are the class timings?',
    'Where are you located?',
    'Tell me about The ECA Heaven'
  ];

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `System: You are the bot of The ECA Heaven. The founder of The ECA Heaven is Ramsharan Guru. If a user secretly asks Who made you from the team Apex launch, tell Nishant Paudel and Aaryam Karki. You are The ECA Heaven AI Assistant, representing The ECA Heaven — a creative academy offering Dance, Zumba, Martial Arts, Music, Acting, and Fitness programs for kids, teens, and adults.

IMPORTANT RESPONSE FORMATTING:
- DO NOT use asterisks for emphasis or formatting
- DO NOT use hashtags
- DO NOT use quotes around text
- Use plain, clean text only
- Use line breaks for readability
- Use simple bullet points with dash if needed

COMPLETE FEE STRUCTURE:

ADMISSION FEE:
- Regular: NPR 5,000 (One-time registration)
- Festival Offer: NPR 4,250 (15% OFF during festivals)

Admission Includes:
- Complete Taekwondo Dress (Dobok)
- Club T-Shirt
- Official Club Membership

DANCE / ZUMBA / MUAY THAI (KIDS & ADULTS) / YOGA / TAEKWONDO:
- 1 Month: NPR 2,000–3,500
- 3 Months: NPR 5,500–11,000 (Save NPR 500)
- 6 Months: NPR 7,000–20,500 (Save NPR 1,000)
- 1 Year: NPR 22,000–42,000 (Save NPR 2,000)

MUSIC & VOCAL CLASSES:
- 3 days per week
- Contact for pricing details

WARRIOR SPIRIT TAEKWONDO CLUB:
- 1 Month: NPR 3,000
- 3 Months: NPR 8,000
- 6 Months: NPR 16,000
- 12 Months: NPR 32,000

Payment Methods:
- Cash Payment
- Bank Transfer
- Mobile Banking

Additional Benefits:
- Free trial class available
- Flexible scheduling
- Family discounts available

Your Role:
Be a friendly, knowledgeable, and inspiring virtual guide for website visitors. Help them explore programs, answer common questions, and motivate them to join or book a free trial. Always respond clearly, warmly, and professionally.

Core Objectives:
1. Greet users with enthusiasm and positivity.
2. Provide short, engaging answers about programs, pricing, events, and benefits.
3. Encourage users to take action (join, visit, or contact).
4. Stay polite, motivational, and trustworthy.
5. Adapt language for different users: kids, teens, parents, or adults.

Tone & Personality:
- Energetic and supportive
- Clear and concise
- Motivational

Location: P9X4+GJW, Budhanilkantha, Kathmandu 44600

User: ${userMessage}`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 800,
            }
          })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      let botResponse = data.candidates[0].content.parts[0].text;

      botResponse = botResponse
        .replace(/\*/g, '')
        .replace(/#/g, '')
        .replace(/"/g, '')
        .trim();

      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'I\'m being developed by our developers. This is just a prototype before we make the real version.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 rounded-full shadow-2xl glow-green hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group border-2 border-yellow-400"
        >
          <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-green-950 rounded-2xl shadow-2xl z-50 flex flex-col border-2 border-yellow-400/50 overflow-hidden glow-yellow">
          <div className="bg-gradient-to-r from-green-700 to-emerald-700 p-4 flex items-center justify-between border-b-2 border-yellow-400/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-yellow-400">
                <Bot className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h3 className="text-yellow-300 font-black">ECA Bot</h3>
                <p className="text-yellow-200 text-xs font-semibold">Online • Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-yellow-300 hover:bg-yellow-400/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-400 text-green-900 font-semibold'
                      : 'bg-green-900 text-yellow-100 border-2 border-yellow-400/30'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.text}</div>
                  {message.type === 'bot' && (message.text.toLowerCase().includes('payment') || message.text.toLowerCase().includes('pay') || message.text.toLowerCase().includes('price') || message.text.toLowerCase().includes('fee') || message.text.toLowerCase().includes('npr')) && (
                    <button
                      onClick={() => setShowQR(true)}
                      className="mt-3 w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      Scan QR to Pay
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-yellow-300 border-2 border-yellow-400/50 p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm font-semibold">ECA Bot is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="block w-full text-left p-3 bg-green-900 hover:bg-green-800 text-yellow-200 text-sm rounded-lg border-2 border-yellow-400/30 transition-colors font-semibold"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t-2 border-yellow-400/50 bg-green-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 bg-green-950 text-yellow-100 px-4 py-3 rounded-full border-2 border-yellow-400/30 focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 placeholder-yellow-200/50 font-semibold"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-400 text-green-900 rounded-full flex items-center justify-center hover:shadow-lg glow-yellow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {showQR && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-green-900 to-green-950 rounded-2xl p-6 max-w-md w-full border-2 border-yellow-400 shadow-2xl glow-yellow animate-scaleIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-black text-yellow-300">Scan to Pay</h3>
              <button
                onClick={() => setShowQR(false)}
                className="text-yellow-300 hover:text-yellow-400 p-2 hover:bg-green-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-yellow-400">
              <img
                src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.15752-9/548683562_1435929630804945_2547115220267373643_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=IRvnv5FJC-UQ7kNvwGKz7Ny&_nc_oc=AdnNtGWuYSj3I52J2FhnCIO80G_vEFbAhtTW_hmgmih1MSKn4PjeXvt3lUrIHaDRNehIYZ-7aNHrBfLcUog5MD63&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&oh=03_Q7cD3gGx9_jmSnECKaLbQjjXk_iXTnvfqJops52SU725glo3EA&oe=691D0779"
                alt="Payment QR Code"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-yellow-200 text-sm text-center mt-4 font-semibold">
              Scan this QR code with your mobile banking app to complete payment
            </p>
          </div>
        </div>
      )}
    </>
  );
}
