/*
BUGS:
1) When moving the cursor too fast over the buttons, the "onMouseLeave" event does not register, making the color change stuck.
FIXS:
1) onMouseEnter={() => setIsHovered({...isHovered, ADD: true})}
onMouseLeave={() => setIsHovered({...isHovered, ADD: false})}
Changed To:
onMouseEnter={() => setIsHovered({ ADD: true, SETTINGS: false, MENU: false})}
onMouseLeave={() => setIsHovered({ ADD: false, SETTINGS: false, MENU: false})}
*/

import { useState } from "react";
import AddCard from "./AddCard.jsx";

export default function ToolBar() {
  const [isHovered, setIsHovered] = useState({
    ADD: false,
    SETTINGS: false,
    MENU: false,
  });
  const [isModalMounted, setIsModalMounted] = useState(null);

  function handleModalOpen() {
    // The showModal() method of the HTMLDialogElement interface displays the dialog as a modal in the top layer.
    document.getElementById("my_modal_2").showModal();
    setIsModalMounted(true);
  }
  function handleModalClose() {
    setIsModalMounted(false);
  }

  return (
    <section className="flex justify-between items-center ">
      <h3 className="text-ms font-bold">Passwords</h3>
      <div className="w-50 text-sm flex items-center justify-between">
        <span
          className="p-1 rounded-sm hover:bg-base-300 cursor-pointer flex items-center"
          onMouseEnter={() =>
            setIsHovered({ ADD: true, SETTINGS: false, MENU: false })
          }
          onMouseLeave={() =>
            setIsHovered({ ADD: false, SETTINGS: false, MENU: false })
          }
          onClick={handleModalOpen}
        >
          <svg
            aria-hidden="true"
            className={`h-4 w-4 mr-1 ${isHovered.ADD ? "fill-primary" : "fill-current"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2.5a.5.5 0 0 0-1 0V9H2.5a.5.5 0 0 0 0 1H9v6.5a.5.5 0 0 0 1 0V10h6.5a.5.5 0 0 0 0-1H10V2.5Z"></path>
          </svg>
          Add
        </span>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <AddCard
              isModalMounted={isModalMounted}
              handleModalClose={handleModalClose}
            />
          </div>
        </dialog>

        <span
          className="p-1 rounded-sm hover:bg-base-300 cursor-pointer flex items-center"
          onMouseEnter={() =>
            setIsHovered({ ADD: false, SETTINGS: true, MENU: false })
          }
          onMouseLeave={() =>
            setIsHovered({ ADD: false, SETTINGS: false, MENU: false })
          }
          onClick={() => {}}
        >
          {/* <img className="h-3 w-3 mr-1" src="/src/assets/gear.svg" alt="Key"/> */}
          <svg
            aria-hidden="true"
            className={`h-4 w-4 mr-1 ${isHovered.SETTINGS ? "fill-primary" : "fill-current"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.91 7.38A8.5 8.5 0 0 1 3.7 4.3a.5.5 0 0 1 .54-.13l1.92.68a1 1 0 0 0 1.32-.76l.36-2a.5.5 0 0 1 .4-.4 8.53 8.53 0 0 1 3.55 0c.2.04.35.2.38.4l.37 2a1 1 0 0 0 1.32.76l1.92-.68a.5.5 0 0 1 .54.13 8.5 8.5 0 0 1 1.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 0 0 0 1.52l1.56 1.32a.5.5 0 0 1 .15.54 8.5 8.5 0 0 1-1.78 3.08.5.5 0 0 1-.54.13l-1.92-.68a1 1 0 0 0-1.32.76l-.37 2a.5.5 0 0 1-.38.4 8.53 8.53 0 0 1-3.56 0 .5.5 0 0 1-.39-.4l-.36-2a1 1 0 0 0-1.32-.76l-1.92.68a.5.5 0 0 1-.54-.13 8.5 8.5 0 0 1-1.78-3.08.5.5 0 0 1 .15-.54l1.56-1.32a1 1 0 0 0 0-1.52L2.06 7.92a.5.5 0 0 1-.15-.54Zm1.06 0 1.3 1.1a2 2 0 0 1 0 3.04l-1.3 1.1c.3.79.72 1.51 1.25 2.16l1.6-.58a2 2 0 0 1 2.63 1.53l.3 1.67a7.56 7.56 0 0 0 2.5 0l.3-1.67a2 2 0 0 1 2.64-1.53l1.6.58a7.5 7.5 0 0 0 1.24-2.16l-1.3-1.1a2 2 0 0 1 0-3.04l1.3-1.1a7.5 7.5 0 0 0-1.25-2.16l-1.6.58a2 2 0 0 1-2.63-1.53l-.3-1.67a7.55 7.55 0 0 0-2.5 0l-.3 1.67A2 2 0 0 1 5.81 5.8l-1.6-.58a7.5 7.5 0 0 0-1.24 2.16ZM7.5 10a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm1 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"></path>
          </svg>
          Settings
        </span>
        <span className="divider divider-horizontal" />
        <span
          className="p-1 rounded-sm hover:bg-base-300 cursor-pointer"
          onMouseEnter={() =>
            setIsHovered({ ADD: false, SETTINGS: false, MENU: true })
          }
          onMouseLeave={() =>
            setIsHovered({ ADD: false, SETTINGS: false, MENU: false })
          }
          onClick={() => {}}
        >
          <svg
            aria-hidden="true"
            className={`h-4 w-4 mr-1 ${isHovered.MENU ? "fill-primary" : "fill-current"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"></path>
          </svg>
        </span>
      </div>
    </section>
  );
}
