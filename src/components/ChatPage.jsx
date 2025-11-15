import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "./Sidebar";
import ChatInput from "./ChatInput";
import TableResponse from "./TableResponse";
import ThemeToggle from "./ThemeToggle";

export default function ChatPage() {
  const { id } = useParams();
  const [sessions, setSessions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(Array.isArray(data) ? data : []))
      .catch(() => setSessions([]));
  }, []);

  useEffect(() => {
    if (!id) return 

    fetch(`http://localhost:4000/api/session/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(Array.isArray(data?.history) ? data.history : []);
        setTableData(null);
      })
      .catch(() => {
        setMessages([]);
        
      });
  }, [id]);

  const handleSend = async (question) => {
  let sessionId = id;
  
  if (!sessionId) {
    const createRes = await fetch("http://localhost:4000/api/new-chat");
    const createData = await createRes.json();
    sessionId = createData.id;
    
   
    setSessions((prev) => [
      ...prev,
      createData, 
    ]);
    setMessages([]);
    window.history.pushState({}, "", `/session/${sessionId}`);
    
  }

  const res = await fetch(`http://localhost:4000/api/chat/${sessionId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });

  if (!res.ok) return;

  const data = await res.json();

 
  setMessages(prev => [
    ...prev,
    { role: "user", message: question },
    { role: "assistant", message: data }
  ]);

  
};


  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="w-60 bg-gray-800 border-r border-gray-700">
        <Sidebar sessions={sessions} />
      </div>
      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-100">
            Chat Assistant
          </h1>
          <ThemeToggle />
        </div>

        <div
          className="
            flex-1 overflow-y-auto 
            p-4 sm:p-6 space-y-4
            bg-gray-900
            rounded-xl
            border border-gray-700
          "
        >
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 text-sm sm:text-base">
              Start a conversation…
            </div>
          ) : (
            messages.map((msg, index) => {
              const isUser = msg.role === "user";
              const content = msg.message;

              if (typeof content === "string") {
                return (
                  <div
                    key={index}
                    className={`max-w-[80%] sm:max-w-[70%] px-4 py-3 rounded-2xl shadow-sm text-sm sm:text-base
                      ${isUser
                        ? "ml-auto bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-100"
                      }
                    `}
                  >
                    {content}
                  </div>
                );
              }

              
              if (content && typeof content === "object") {
                return (
                  <div
                    key={index}
                    className="max-w-[80%] sm:max-w-[70%] px-4 py-3 rounded-2xl shadow-sm bg-gray-700 text-gray-100"
                  >
                    {content.question && (
                      <p className="font-semibold mb-1">{content.question}</p>
                    )}

                    {content.description && (
                      <p className="text-sm mb-2">{content.description}</p>
                    )}

                    {Array.isArray(content.table) && content.table.length > 0 && (
                      <TableResponse data={content.table} />
                    )}
                  </div>
                );
              }
                
              return (
                <div key={index} className="...">
                  Unsupported message type.
                </div>
              );
              
            })
          )}
        </div>

        <div className="mt-4">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

