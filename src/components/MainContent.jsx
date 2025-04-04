import { useState } from "react";
import ToolBar from "./ToolBar.jsx";
import PasswordList from "./PasswordList.jsx";

export default function MainContent({ credentials }) {

  const [passwordEntries, setPasswordEntries] = useState(credentials);
  const [searchValue, setSearchValue] = useState("");
  // const searchPasswords = (e)=>

  return (
    <div className="p-4 flex flex-col space-y-4">
      {/*"PassForge" with "add" & "settings"*/}
      <ToolBar />
      {/* Search */}
      <div className="w-full relative shadow-md">
        <svg
          aria-hidden="true"
          // Absolute positioning used for the "search" svg to position it in the padding of the input field.
          className="h-5 w-5 absolute left-2 top-2 fill-current opacity-50"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"></path>
        </svg>
        <input
          className="pl-8 pr-2 py-2 text-sm w-full rounded-lg"
          type="search"
          placeholder="Search passwords"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {/* PasswordList */}
      <PasswordList credentials={passwordEntries} searchValue={searchValue} />
    </div>
  );
}
