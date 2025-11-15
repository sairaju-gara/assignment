import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e?.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText("");
  };

  return (
    <form onSubmit={submit} className="mt-4 flex gap-2 w-full">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="
          flex-1 
          p-3 sm:p-4
          rounded-2xl
          bg-gray-800 dark:bg-gray-700
          text-gray-100 placeholder-gray-400
          border border-gray-700 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
        "
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="
          px-4 sm:px-6 py-3 sm:py-4
          bg-blue-600 hover:bg-blue-700 active:bg-blue-800
          text-white 
          rounded-2xl 
          font-medium
          shadow-md shadow-black/20
          transition-all
        "
      >
        Send
      </button>
    </form>
  );
}
