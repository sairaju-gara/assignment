import {Link} from 'react-router-dom'
import { useState} from 'react';
import { FaBars } from "react-icons/fa";

const Sidebar=({ sessions,onCreateNewChat}) =>{
  const [displaySidebar,setDisplayBar]=useState(false)

  const onToggleDisplayBar=()=>{
    setDisplayBar(prevValue=> !prevValue)
  }

  return (
    <>
    <FaBars onClick={onToggleDisplayBar} className='block md:hidden m-2 mt-6 mr-0 bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900' size={24}/>
    <div className={`
      ${displaySidebar?"block absolute":"hidden"}
      md:block w-full h-full p-4 overflow-y-auto
      bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900
      border-r border-gray-300 dark:border-gray-700
    `}>
      <h2 className="text-xl font-semibold mb-6">Sessions</h2>
      <Link className="
              block px-4 py-2 rounded-lg truncate
              bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900
              hover:bg-gray-700 dark:hover:bg-gray-400
              transition
            " 
            onClick={onCreateNewChat}>New Chat</Link>
      <div className="flex flex-col gap-2">
          
          {sessions.map((s) => (
          <Link
            key={s.id}
            to={`/session/${s.id}`}
            className="
              block px-4 py-2 rounded-lg truncate
              bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900
              hover:bg-gray-700 dark:hover:bg-gray-400
              transition
            "
          >
            {s.title}
          </Link>
        ))}
      </div>
    </div>
  </>
  );
}

export default Sidebar;

