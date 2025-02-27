"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import axios from "axios";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const formatAIResponse = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold
      .replace(/\*(.*?)\*/g, "<i>$1</i>") // Italics
      .replace(/\n/g, "<br />") // Line breaks
      .replace(/• (.*?)\n/g, "<li>$1</li>"); // Bullet points
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-main text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-6 tracking-wide metallic-text drop-shadow-lg"
      >
        Chat with AI About My Portfolio
      </motion.h1>

      <div className="w-full max-w-2xl p-6 h-[500px] flex flex-col border border-gray-700 rounded-3xl bg-main shadow-2xl overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-4 p-3 custom-scrollbar">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-2xl max-w-[75%] shadow-md ${
                msg.sender === "user"
                  ? "bg-blue-500 ml-auto text-white"
                  : "bg-gray-800 mr-auto text-gray-300 border border-gray-600 shadow-md"
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

        <div className="flex items-center gap-3 p-3 border-t border-gray-700 bg-gray-800 rounded-b-3xl">
          <input
            className="flex-1 bg-gray-700 text-white border-none p-3 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 shadow-lg active:scale-95 disabled:opacity-50"
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
          box-shadow: 0px 0px 10px rgba(0, 183, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
