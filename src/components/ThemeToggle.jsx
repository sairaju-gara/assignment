function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 sm:px-5 py-2 sm:py-3
        bg-gray-800 dark:bg-gray-700
        text-white
        rounded-2xl
        font-medium
        shadow-md shadow-black/30
        hover:bg-gray-700 dark:hover:bg-gray-600
        active:scale-95
        transition-all duration-150
      "
    >
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
