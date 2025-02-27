import { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ isModalMounted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    // Microsoft Password also uses "mousedown" event to close dropdown.
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Resets the selected option when modal is closed
  useEffect(() => {
    if (!isModalMounted) {
      setSelectedOption(null);
    }
  }, [isModalMounted]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "Business",
    "Email",
    "Entertainment",
    "Finance",
    "Food",
    "Games",
    "Health",
    "Lifestyle",
    "Music",
    "News",
    "Productivity",
    "Shopping",
    "Social",
    "Sports",
    "Tech",
    "Travel",
    "Utilities",
    "Weather",
    "Other",
  ];

  return (
    <div className="w-full" ref={dropdownRef}>
      {/* Dropdown button */}
      {/* Styles removed from the below button, to make style consistent across the modal */}
      {/* shadow-sm focus:border-primary border border-base-300 bg-base-100 focus:outline-0 focus:ring-2 focus:ring-primary text-left */}
      <button
        onClick={toggleDropdown}
        className="input px-4 w-full flex justify-between items-center cursor-pointer rounded-md"
      >
        <span
          className={`${!selectedOption ? "text-base-content" : "text-base-content"}`}
        >
          {selectedOption || "Select category"}
        </span>
        <svg
          className={`h-5 w-5 text-base-content transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        // min-w-112 added, because it was perfectly matching the width of the button above. (Also if modal grows it can also grow with it)
        // border-base-300 looks better than border-base-content
        <div className="absolute mt-1 min-w-112 bg-base-100 border border-base-300 rounded-md shadow-lg z-10">
          <div className="max-h-40 overflow-y-auto">
            <ul className="py-1">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 text-base-content hover:bg-base-200 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
