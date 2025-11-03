import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, Loader } from 'lucide-react'

interface Message {
  type: 'bot' | 'user'
  text: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: 'Hello! I\'m ECA Bot. How can I help you today?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setMessages(prev => [...prev, { type: 'user', text: userMessage }])
    setInput('')
    setIsLoading(true)

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
                text: `You are the AI assistant for The ECA Heaven. The founder is Ramsharan Guru. You represent a creative academy offering Dance, Zumba, Martial Arts, Music, Acting, and Fitness programs for kids, teens, and adults.

COMPLETE FEE STRUCTURE:

ADMISSION FEE:
- Regular: NPR 5,000 (One-time registration)
- Festival Offer: NPR 4,250 (15% OFF during festivals)

DANCE / ZUMBA / MUAY THAI / YOGA / TAEKWONDO:
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

Payment Methods: Cash, Bank Transfer, Mobile Banking

Location: Budhanilkantha, Kathmandu

Be friendly, helpful, and concise. Response formatting:
- Use plain text only
- Use line breaks for readability
- No asterisks, hashtags, or special formatting

User question: ${userMessage}`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500,
            }
          })
        }
      )

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      let botResponse = data.candidates[0].content.parts[0].text

      botResponse = botResponse
        .replace(/\*/g, '')
        .replace(/#/g, '')
        .replace(/"/g, '')
        .trim()

      setMessages(prev => [...prev, { type: 'bot', text: botResponse }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'Sorry, I\'m unable to respond right now. Please call us at +977-9706418555'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">ECA Bot</h3>
                <p className="text-xs text-blue-100">Online • Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 p-1 rounded transition-colors"
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
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                  <Loader className="w-5 h-5 animate-spin text-blue-600" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                placeholder="Ask anything..."
                disabled={isLoading}
                className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
