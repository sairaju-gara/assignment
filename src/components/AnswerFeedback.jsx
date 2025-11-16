import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const AnswerFeedback=()=> {
  return (
    <div className="flex gap-3 mt-2">
      <button className="
        px-3 py-1 
        bg-gray-300 dark:bg-gray-700
        hover:bg-gray-400 dark:hover:bg-gray-600
        text-gray-900 dark:text-gray-100
        rounded-lg transition
      ">
        <FaThumbsUp size={20} />
      </button>

      <button className="
        px-3 py-1 
        bg-gray-300 dark:bg-gray-700
        hover:bg-gray-400 dark:hover:bg-gray-600
        text-gray-900 dark:text-gray-100
        rounded-lg transition
      ">
        <FaThumbsDown size={20} />
      </button>
    </div>
  );
}

export default AnswerFeedback;
