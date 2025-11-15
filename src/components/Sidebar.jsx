import { Link } from "react-router-dom";

function Sidebar({ sessions }) {
  return (
    <div className="w-72 sm:w-80 bg-green-900 text-gray-100 p-4 overflow-y-auto h-screen max-h-screen border-r border-gray-700">
      <h2 className="text-xl font-semibold mb-6">Sessions</h2>
      <div className="flex flex-col gap-2">
        {sessions.map((s) => (
          <Link
            key={s.id}
            to={`/session/${s.id}`}
            className="
              block px-4 py-2
              rounded-lg
              bg-gray-800 hover:bg-gray-700
              text-sm font-medium
              hover:text-white
              truncate
              transition-colors
            "
            title={s.title}
          >
            {s.title}
          </Link>
        ))}
      </div>

      
    </div>
  );
}

export default Sidebar;
