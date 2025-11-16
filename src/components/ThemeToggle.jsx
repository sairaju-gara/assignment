const ThemeToggle=()=> {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 sm:px-5 py-2 sm:py-3
        bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-gray-900
        rounded-2xl
        font-medium
        shadow-md shadow-black/30
      "
    >
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
