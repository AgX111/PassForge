// BUGS:
// Premature opoening of the sidebar, because elements are opaqued but not hidden, when hovering over these invisible elements, the sidebar is opening.//
//Fixed: By adding this to className of <ul> "${!isHovered && "lg:pointer-events-auto pointer-events-none"} lg:pointer-events-auto overflow-hidden"

import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [pageSelected, dispatch] = useReducer(reducer, "");

  function reducer(pageSelected, action) {
    switch (action.type) {
      case "HOME":
        return action.type;
      case "ABOUT":
        return action.type;
      case "STATS":
        return action.type;
      case "PASSWORDS":
        return action.type;
      case "PERSONAL-INFO":
        return action.type;
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  return (
    // Keeps the sidebar above the "MainContent" by setting z-1
    <div className="fixed left-0 h-full z-1">
      <div
        className={`h-full transition-all duration-300 ease-in-out bg-base-200 rounded-lg ${isHovered ? "w-60" : "w-16"} lg:w-60`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <ul className="menu p-4 text-base-content"> */}
        <ul
          className={`menu p-4 text-base-content ${!isHovered && "lg:pointer-events-auto pointer-events-none"} lg:pointer-events-auto overflow-hidden`}
        >
          <Link to="/home">
            <li>
              <a
                className="flex items-center space-x-2 w-52 "
                onClick={() => dispatch({ type: "HOME" })}
              >
                {pageSelected !== "HOME" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-primary"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.25L1 12h3v9h7v-6h2v6h7v-9h3L12 2.25z" />
                  </svg>
                )}
                <span
                  className={`${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300 lg:opacity-100`}
                >
                  Home
                </span>
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a
                className="flex items-center space-x-2 w-52"
                onClick={() => dispatch({ type: "ABOUT" })}
              >
                {pageSelected !== "ABOUT" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-primary"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM11 7h2v2h-2Zm0 4h2v6h-2Z" />
                  </svg>
                )}
                <span
                  className={`${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300 lg:opacity-100`}
                >
                  About
                </span>
              </a>
            </li>
          </Link>
          <Link to="/stats">
            <li>
              <a
                className="flex items-center space-x-2 w-52"
                onClick={() => dispatch({ type: "STATS" })}
              >
                {pageSelected !== "STATS" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-primary"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                )}
                <span
                  className={`${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300 lg:opacity-100`}
                >
                  Stats
                </span>
              </a>
            </li>
          </Link>
          <Link to="/passwords">
            <li>
              <a
                className="flex items-center space-x-2 w-52"
                onClick={() => dispatch({ type: "PASSWORDS" })}
              >
                {pageSelected !== "PASSWORDS" ? (
                  <svg
                    fill="currentColor"
                    aria-hidden="true"
                    className="h5- w-5 fill-none stroke-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2.5-4a5.45 5.45 0 0 0-5.38 6.67c.06.27 0 .5-.14.64l-4.54 4.54A1.5 1.5 0 0 0 2 14.91v1.59c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V16h1a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-.18c.5.13 1 .18 1.5.18 3.08 0 5.5-2.42 5.5-5.5S15.58 2 12.5 2ZM8 7.5C8 4.98 9.98 3 12.5 3S17 4.98 17 7.5 15.02 12 12.5 12c-.66 0-1.27-.1-1.78-.35a.5.5 0 0 0-.72.45v.9H9a1 1 0 0 0-1 1v1H7a1 1 0 0 0-1 1v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.59a.5.5 0 0 1 .15-.35l4.54-4.54c.43-.43.52-1.04.4-1.56-.06-.3-.09-.63-.09-.96Z"></path>
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 fill-primary"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7.5C7 4.42 9.42 2 12.5 2S18 4.42 18 7.5 15.58 13 12.5 13c-.5 0-1-.05-1.5-.18V13a1 1 0 0 1-1 1H9v1a1 1 0 0 1-1 1H7v.5c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 2 16.5v-1.59c0-.4.16-.78.44-1.06l4.54-4.54c.13-.13.2-.37.14-.64A5.62 5.62 0 0 1 7 7.5ZM15 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
                  </svg>
                )}
                <span
                  className={`${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300 lg:opacity-100`}
                >
                  Passwords
                </span>
              </a>
            </li>
          </Link>
          <Link to="/personal-info">
            <li>
              <a
                className="flex items-center space-x-2 w-52"
                onClick={() => dispatch({ type: "PERSONAL-INFO" })}
              >
                {pageSelected !== "PERSONAL-INFO" ? (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 fill-none stroke-current stroke-1"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8 1.1.69 2.5 1.07 4.03 1.17A3 3 0 0 1 9 17v-.04a7.42 7.42 0 0 1-3.33-1A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h4.17a3 3 0 0 1 .6-1H5Zm5 2c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"></path>
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    className="h5 w-5 fill-primary"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8 1.1.69 2.5 1.07 4.03 1.17A3 3 0 0 1 9 17v-4c0-.77.29-1.47.76-2H5.01Zm5 2c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"></path>
                  </svg>
                )}
                <span
                  className={`${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300 lg:opacity-100`}
                >
                  Personal info
                </span>
              </a>
            </li>
          </Link>
          {/* Divier */}
          {/* <div className={`divider ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 lg:opacity-100`}/> */}
          {/* Settings, why looks stupid, to put it here. */}
          {/* <li>
            <a className="flex items-center space-x-2 w-52">
              <img className="h-5 w-5" src="/src/assets/gear.svg" alt="Key"/>
              <span className={`${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 lg:opacity-100`}>
                Settings
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
