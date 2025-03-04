"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot } from "lucide-react"; 
import axios from "axios";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const formatAIResponse = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.*?)\*/g, "<i>$1</i>")
      .replace(/\n/g, "<br />")
      .replace(/• (.*?)\n/g, "<li>$1</li>");
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("/api/chat", { prompt: input });
      const formattedText = formatAIResponse(response.data.reply || "I'm here to help!");
      const aiMessage = { sender: "ai", text: formattedText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [...prev, { sender: "ai", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-main text-white px-4 relative">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-6 tracking-wide metallic-text drop-shadow-lg"
      >
        Chat with AI
      </motion.h1>

      
      <div className="w-full max-w-xl flex flex-col border border-gray-700 rounded-3xl bg-gray-900 shadow-2xl overflow-hidden backdrop-blur-md bg-opacity-60 h-[500px]">
       
        <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-gray-800 to-gray-700 border-b border-gray-700">
          <Bot className="w-10 h-10 text-blue-400" />
          <div>
            <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
            <p className="text-sm text-gray-400">Ask me about Tarun</p>
          </div>
        </div>

       
        <div className="flex-1 overflow-y-auto space-y-4 p-3 custom-scrollbar h-[500px]">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-2xl max-w-[75%] shadow-lg ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 ml-auto text-white"
                  : "bg-gray-800 bg-opacity-80 text-gray-300 border border-gray-600 shadow-md"
              }`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          ))}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 rounded-2xl bg-gray-800 border border-gray-600 mr-auto text-gray-300 max-w-[75%] shadow-md glow-effect"
            >
              AI is typing...
            </motion.div>
          )}
        </div>

        
        <div className="flex items-center gap-3 p-3 border-t border-gray-700 bg-gray-900 rounded-b-3xl shadow-lg">
          <input
            className="flex-1 bg-gray-700 text-white border-none p-3 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300 shadow-inner focus:outline-none"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 shadow-lg active:scale-95 disabled:opacity-50 glow-effect"
            onClick={handleSend}
            disabled={loading}
          >
            <Send className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4a5568;
          border-radius: 10px;
        }
        .glow-effect {
          box-shadow: 0px 0px 15px rgba(0, 183, 255, 0.6);
        }
      `}</style>
    </div>
  );
}
