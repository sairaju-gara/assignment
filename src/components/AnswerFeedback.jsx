import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function AnswerFeedback() {
  return (
    <div className="flex gap-3 mt-2">
      <button className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition">
        <FaThumbsUp size={20} />
      </button>
      <button className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition">
        <FaThumbsDown size={20} />
      </button>
    </div>
  );
}

export default AnswerFeedback;
